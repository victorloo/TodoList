import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../prototype/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoes: Todo[];

  @Output() deleteTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchChecked(todo: Todo) {
    todo.checked = !todo.checked;
  }

  delete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
