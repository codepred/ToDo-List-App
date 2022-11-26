import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-acceptedlist',
  templateUrl: './acceptedlist.component.html',
  styleUrls: ['./acceptedlist.component.scss'],
})
export class AcceptedListComponent implements OnInit {

  todos: { id: number; task: string; taskDate: string}[] | undefined;
  constructor(private ts: TodoService) { }
  ngOnInit(): void {
    if(this.ts.acceptedTodoList[0].task === 'cannotbe')
    this.ts.acceptedTodoList.splice(0, 1)
    
    console.log(this.ts.acceptedTodoList)
    this.todos = this.ts.acceptedTodoList
  }

}
