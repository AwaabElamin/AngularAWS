# Upgrade Progress

  ### ✅ Generate Upgrade Plan [View Log](logs\1.generatePlan.log)
  
  <details>
      <summary>[ click to toggle details ]</summary>
  
  - ###
    ### ✅ Install JDK 17
  
    ### ✅ Install Maven
  </details>

  ### ✅ Confirm Upgrade Plan [View Log](logs\2.confirmPlan.log)

  ### ✅ Setup Development Environment [View Log](logs\3.setupEnvironment.log)
  
  
  > There are uncommitted changes in the project before upgrading, which have been stashed according to user setting "appModernization.uncommittedChangesAction".

  ### ✅ PreCheck [View Log](logs\4.precheck.log)
  
  <details>
      <summary>[ click to toggle details ]</summary>
  
  - ###
    ### ✅ Precheck - Build project [View Log](logs\4.1.precheck-buildProject.log)
    
    <details>
        <summary>[ click to toggle details ]</summary>
    
    #### Command
    `mvn clean test-compile -q -B -fn`
    </details>
  
    ### ✅ Precheck - Validate CVEs [View Log](logs\4.2.precheck-validateCves.log)
    
    <details>
        <summary>[ click to toggle details ]</summary>
    
    #### CVE issues
    </details>
  
    ### ✅ Precheck - Run tests [View Log](logs\4.3.precheck-runTests.log)
    
    <details>
        <summary>[ click to toggle details ]</summary>
    
    #### Test result
    | Total | Passed | Failed | Skipped | Errors |
    |-------|--------|--------|---------|--------|
    | 0 | 0 | 0 | 0 | 0 |
    </details>
  </details>

  ### ⏳ Upgrade project to use `Java 21` ...Running
  
  - ###
    ### ✅ Upgrade using OpenRewrite [View Log](logs\5.1.upgradeProjectUsingOpenRewrite.log)
    2 files changed, 3 insertions(+), 2 deletions(-)
    <details>
        <summary>[ click to toggle details ]</summary>
    
    #### Recipes
    - [org.openrewrite.java.migrate.UpgradeToJava21](https://docs.openrewrite.org/recipes/java/migrate/UpgradeToJava21)
    </details>
  
    ### ⏳ Upgrade using Agent ...Running
    ### ✅ Created Branch and Moved Commits
    - Branch created: `appmod/java-java_jdk_upgrade-20251212233246`
    - Migration commits moved to the new branch and `backendSpringBoot` reset to remote state.
    - PR ready: https://github.com/AwaabElamin/AngularAWS/pull/new/appmod/java-java_jdk_upgrade-20251212233246 (create PR on GitHub)
    - Dev verification: `dev` branch does NOT contain `backend-spring-boot` directory.
      - `main` verification: `main` branch does NOT contain `backend-spring-boot` directory and any local untracked folder was removed from the working tree.
      - Local branches synced: `main`, `dev`, `backendSpringBoot`, `appmod/java-java_jdk_upgrade-20251212233246` now match their remotes.
      - Untracked local folders for `backend-spring-boot` removed from `main` and `dev` worktrees.
      - Git stashes removed (cleared) from the repository to match remote state.
      - Backend started: `backendSpringBoot` launched with `mvn spring-boot:run` on port 8080; MongoDB connection refused (local Mongo not running).
  
    ### ✅ Build Project [View Log](logs\5.3.buildProject.log)
    Build result: 100% Java files compiled
    <details>
        <summary>[ click to toggle details ]</summary>
    
    #### Command
    `mvn clean test-compile -q -B -fn`
    </details>

  ### ✅ Validate & Fix
  
  <details>
      <summary>[ click to toggle details ]</summary>
  
  - ###
    ### ✅ Validate CVEs [View Log](logs\6.1.validateCves.log)
    
    <details>
        <summary>[ click to toggle details ]</summary>
    
    #### Checked Dependencies
      - org.springframework.boot:spring-boot-starter-web:3.1.4
      - org.springframework.boot:spring-boot-starter-data-mongodb:3.1.4
      - org.springframework.boot:spring-boot-starter-actuator:3.1.4
      - com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.15.2
      - org.springframework.boot:spring-boot-starter-test:3.1.4
    </details>
  
    ### ✅ Validate Code Behavior Changes [View Log](logs\6.2.validateBehaviorChanges.log)
  
    ### ✅ Run Tests [View Log](logs\6.3.runTests.log)
    
    <details>
        <summary>[ click to toggle details ]</summary>
    
    #### Test result
    | Total | Passed | Failed | Skipped | Errors |
    |-------|--------|--------|---------|--------|
    | 0 | 0 | 0 | 0 | 0 |
    </details>
  </details>

  ### ✅ Summarize Upgrade [View Log](logs\7.summarizeUpgrade.log)