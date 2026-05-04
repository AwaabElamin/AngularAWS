"""
UX Planning Agent for Awaaab Angular Frontend
----------------------------------------------
Analyzes the Angular 15 codebase and generates structured UX improvement plans
covering: navigation/routing, forms & validation, mobile responsiveness,
consistent styling, and performance optimization.

Run as HTTP server (default):
    python agent.py --server

Run in CLI mode:
    python agent.py --cli
"""

import argparse
import asyncio
import os
import json
import glob
from pathlib import Path

from dotenv import load_dotenv
from azure.identity import DefaultAzureCredential

from agent_framework import Agent
from agent_framework.foundry import FoundryChatClient
from azure.ai.agentserver.agentframework import from_agent_framework

# Local .env values are overridden by Foundry runtime env vars
load_dotenv(override=False)

# ── Project root (Angular workspace) ────────────────────────────────────────
ANGULAR_ROOT = Path(__file__).parent.parent  # d:\Awaaab LLC\...\AngularAWS

# ── Tool definitions ─────────────────────────────────────────────────────────

def read_angular_file(relative_path: str) -> str:
    """Read a file from the Angular project by its path relative to the workspace root.
    Use this to inspect component TypeScript, HTML templates, CSS, or routing modules.
    """
    target = (ANGULAR_ROOT / relative_path).resolve()
    # Security: ensure path stays inside the Angular workspace
    if not str(target).startswith(str(ANGULAR_ROOT.resolve())):
        return "Error: Path is outside the Angular workspace."
    if not target.exists():
        return f"Error: File not found — {relative_path}"
    try:
        return target.read_text(encoding="utf-8")
    except Exception as exc:
        return f"Error reading file: {exc}"


def list_angular_files(pattern: str = "src/**/*.{ts,html,css}", max_results: int = 80) -> str:
    """List Angular source files matching a glob pattern (relative to workspace root).
    Default lists all .ts, .html, and .css files under src/.
    Returns a newline-separated list of relative paths.
    """
    base = ANGULAR_ROOT.resolve()
    matches = glob.glob(str(base / pattern), recursive=True)
    rel_paths = [str(Path(m).relative_to(base)) for m in sorted(matches)][:max_results]
    return "\n".join(rel_paths) if rel_paths else "No files found for pattern: " + pattern


def get_project_summary() -> str:
    """Return a high-level summary of the Angular project structure including
    modules, routing, and key component counts. Useful for initial analysis.
    """
    summary = {
        "angular_version": "15.2.4",
        "ui_framework": "None (custom CSS + Flexbox)",
        "lazy_loaded_modules": [
            "login (/login)",
            "user (/user) — auth guarded",
            "project (/project) — auth guarded",
            "auto-services (/auto) — auth guarded",
            "groceries (/groceries) — auth guarded",
            "resume (/resume)",
            "photos (/photos)",
            "delivery (/delivery)",
        ],
        "root_components": ["AppComponent", "MainHeaderComponent", "MainFooterComponent", "MainMainComponent"],
        "auth": "JWT token in localStorage, HTTP interceptor",
        "key_areas_for_ux_improvement": {
            "navigation": "No active-link highlighting, no breadcrumbs, no mobile hamburger menu",
            "forms": "Custom styling but missing reactive validation feedback",
            "responsiveness": "Flexbox only, no media queries system, no mobile-first breakpoints",
            "styling": "30+ isolated CSS files, no design tokens or shared variable file",
            "performance": "Lazy loading already in place; images and bundle splitting can improve",
        },
    }
    return json.dumps(summary, indent=2)


# ── Register tools list ───────────────────────────────────────────────────────
TOOLS = [
    read_angular_file,
    list_angular_files,
    get_project_summary,
]

# ── System instructions ───────────────────────────────────────────────────────
SYSTEM_INSTRUCTIONS = """
You are a senior UX/Frontend architect specialized in Angular applications.
Your role is to analyze the Awaaab Angular 15 frontend codebase and produce clear,
actionable improvement plans. You have access to tools to read source files and
list project structure.

Focus areas (apply to every analysis unless the user restricts scope):
1. **Navigation & Routing** — active-link states, breadcrumbs, mobile hamburger menu,
   route transition animations, better 404/redirect handling.
2. **Forms & Validation** — reactive form patterns, real-time error messages,
   loading/disabled states on submit buttons, accessible labels.
3. **Mobile Responsiveness** — introduce a CSS custom-property breakpoint system,
   convert fixed widths to fluid/percentage layouts, touch-friendly tap targets.
4. **Consistent Styling** — establish CSS design tokens (:root variables for colors,
   spacing, typography), consolidate duplicated styles, add a shared `_variables.css`.
5. **Performance** — review bundle sizes, add image lazy loading, review change
   detection strategies (OnPush where appropriate).

When providing a plan:
- Start with a `## Summary` of findings from the code you read.
- List each improvement as a numbered task with: goal, affected files, and a
  concrete code snippet or diff to apply.
- Prioritize by effort vs. impact (label each: Quick Win / Medium / Refactor).
- Always read the actual source files before making recommendations.
""".strip()


# ── Entry point ───────────────────────────────────────────────────────────────
async def main():
    parser = argparse.ArgumentParser(description="Awaaab UX Planning Agent")
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--server", action="store_true", help="Run as HTTP server (default)")
    mode.add_argument("--cli", action="store_true", help="Run in interactive CLI mode")
    args = parser.parse_args()

    credential = DefaultAzureCredential()

    client = FoundryChatClient(
        project_endpoint=os.environ["FOUNDRY_PROJECT_ENDPOINT"],
        model=os.environ["FOUNDRY_MODEL_DEPLOYMENT_NAME"],
        credential=credential,
    )

    async with Agent(
        client=client,
        name="UX-Planning-Agent",
        instructions=SYSTEM_INSTRUCTIONS,
        tools=TOOLS,
    ) as agent:

        if args.cli:
            # Interactive CLI loop
            print("UX Planning Agent ready. Type your question (Ctrl+C to exit).\n")
            while True:
                try:
                    user_input = input("You: ").strip()
                    if not user_input:
                        continue
                    stream = agent.run(user_input, stream=True)
                    print("Agent: ", end="", flush=True)
                    async for chunk in stream:
                        if chunk.text:
                            print(chunk.text, end="", flush=True)
                    print("\n")
                    await stream.get_final_response()
                except KeyboardInterrupt:
                    print("\nGoodbye.")
                    break
        else:
            # HTTP server mode (default) — usable with AI Toolkit Agent Inspector
            await from_agent_framework(agent).run_async()


if __name__ == "__main__":
    asyncio.run(main())
