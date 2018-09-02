import { Component, OnInit } from '@angular/core';
import { Todo } from '../prototype/todo';
import { TodoService } from '../models/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  getTodoes() {
    return this.todoService.getTodoes();
  }

  switchChecked(todo: Todo) {
    this.todoService.switchChecked(todo);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

}
