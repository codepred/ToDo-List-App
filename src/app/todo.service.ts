import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskId = 3
  todoList = [
    {
      id: 1, 'task': "Tdgdfgdfgfd" , 'taskDate' : '2021-07-21'
    },
    {
      id: 2, 'task': "Xdgdfgdfgfd", 'taskDate' : '2021-07-21'
    },
  ]
  acceptedTodoList = [
    {
      id: 1, 'task': "cannotbe" , 'taskDate' : '2021-07-21'
    },
  ]

  constructor() { }

  addTodo(taskName: any, taskDate: any) {
    this.todoList.push({ "id": this.taskId++, 'task': taskName, 'taskDate': taskDate})
  }


  addTodoAccepted(taskName: any, taskDate: any) {
    this.acceptedTodoList.push({ "id": this.taskId++, 'task': taskName, 'taskDate': taskDate})
  }


  deleteTodo(index: number) {
    this.todoList.splice(index, 1)
  }
}
