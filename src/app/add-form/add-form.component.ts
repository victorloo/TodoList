import { Component, OnInit } from '@angular/core';
import { TodoService } from '../models/todo.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  placeholder: string = 'Title...';
  todoContent: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    this.todoService.addTodo(this.todoContent);
  }

}
