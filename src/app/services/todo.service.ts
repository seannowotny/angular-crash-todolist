import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService 
{
  constructor(private http:HttpClient) { }

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  // Get Todos
  getTodos():Observable<Todo[]>
  {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Toggle Completed
  toggleCompletedField(todo:Todo):Observable<Todo>
  {
    return this.http.put<Todo>(`${this.todosUrl}/${todo.id}`, todo, httpOptions);
  }

  deleteTodo(todo:Todo):void
  {
    this.http.delete<Todo>(`${this.todosUrl}/${todo.id}`, httpOptions);
  }
}
