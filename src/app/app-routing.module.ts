import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MacroComponent} from "./macro/macro.component";
import {BmiComponent} from "./bmi/bmi.component";
import {PersonComponent} from "./person/person.component";

const routes: Routes = [
  {path : "macro" , component : MacroComponent},
  {path : "bmi" , component : BmiComponent},
  {path : "person" , component : PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
