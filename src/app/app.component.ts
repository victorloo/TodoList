import { Component } from '@angular/core';
import { Todo } from './prototype/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My To Do List';

  todoes: Todo[] = [
    {
      id: 1,
      content: 'Hit the gym',
      checked: false
    },
    {
      id: 2,
      content: "Pay bills",
      checked: true
    },
    {
      id: 3,
      content: "Meet George",
      checked: false
    },
    {
      id: 4,
      content: "Buy eggs",
      checked: false
    },
    {
      id: 5,
      content: "Read a book",
      checked: false
    },
    {
      id: 6,
      content: "Organize office",
      checked: false
    }
  ];

  addTodo(content: string) {
    this.todoes.push({
      id: this.todoes.length +1,
      content: content,
      checked: false
    })
  }

  deleteTodo(todo: Todo) {
    this.todoes = this.todoes.filter(thatTodo => thatTodo.id !== todo.id);
  }
}
