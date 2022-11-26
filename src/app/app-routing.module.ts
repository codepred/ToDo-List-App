import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedListComponent } from './acceptedlist/acceptedlist.component';
import { AppComponent } from './app.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [
  {path : 'accepted', component: AcceptedListComponent},
  {path : 'list', component: TodolistComponent},
  {path : 'add', component: TodoformComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
