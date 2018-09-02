import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  placeholder: string = 'Title...';
  todoContent: string = '';

  @Output() addTodoContent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    this.addTodoContent.emit(this.todoContent);
  }

}
