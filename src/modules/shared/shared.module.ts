import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {AuthorizeLayoutComponent} from "./authorize-layout/authorize-layout.component";
import {NavigationBarComponent} from "../../directives/navigation-bar/navigation-bar.component";
import {SideBarComponent} from "../../directives/side-bar/side-bar.component";
import {RouterModule} from "@angular/router";
import {MomentModule} from "angular2-moment";

//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    RouterModule
  ],
  declarations: [
    AuthorizeLayoutComponent,
    NavigationBarComponent,
    SideBarComponent
  ]
})

export class SharedModule {
}

//#endregion
