import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss'],
})
export class TodoformComponent implements OnInit {
  todoInput = ""
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  constructor(private ts: TodoService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  addTask() {
    this.ts.addTodo(this.todoInput,this.taskDate);
    this.todoInput = ""
    this.taskDate = ""
  }

  canAdd(){
    if(this.addTask.length == 0){
      return true;
    }
    return false;
  }

  resetForm() {
    this.todoInput = ""
    this.taskDate = ""
  }

  onChange() {
  }

}
