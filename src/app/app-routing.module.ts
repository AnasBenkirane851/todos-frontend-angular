import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './todos-page/todos-page.component';

const routes: Routes = [
  { path: 'todos-page', component: TodosPageComponent },
  {path:'', redirectTo: 'todos-page',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
