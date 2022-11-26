import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(private ts: TodoService) { }

  todos: { id: number; task: string; taskDate: string}[] | undefined;

  ngOnInit(): void {
    this.todos = this.ts.todoList
  }
  removeTodo(index: number) {
    this.ts.deleteTodo(index)
  }
  accepToDo(index: number) {
    this.ts.addTodoAccepted(this.ts.todoList[index].task , this.ts.todoList[index].taskDate);
    this.ts.deleteTodo(index)
  }

  
}
