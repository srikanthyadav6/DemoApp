import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public task:string[]=[];
  toDoObservable$ !: Observable<string>;
  constructor() { 

  }
  addTask(task:string):void{
    this.task.push(task);
  }
  removeTask(index:number){
    this.task.splice(index,1);
  }
  
}
