import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { NavbarComponent } from "./components/navbar/navbar.component";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
