import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './TaskModel';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public tasks:Task[]=[{task:'Hello'}];
  constructor() { 
  }
  initTask():Observable<Task[]>{
    //TODO get tasks using api
    return of (this.tasks);
  }
  addTask(task:Task):void{
    this.tasks.push(task);
  }
  removeTask(index:number):void{
    this.tasks.splice(index,1);
  }
  
}
