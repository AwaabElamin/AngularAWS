import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { MainMainComponent } from "./main-main/main-main.component";

const routes: Routes = [
    { path: "", component: AdminComponent},
    { path: "mainMain", component: MainMainComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }