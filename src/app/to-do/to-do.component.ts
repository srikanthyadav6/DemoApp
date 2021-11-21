import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ToDoComponent  {
  public tasks:string[]=[];
  constructor() { }

  addTask(task:string){
    this.tasks.push(task)
  }
  removeTask(i:number){
    this.tasks.splice(i,1);
  }
}
