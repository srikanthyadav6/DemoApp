import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  public tasks:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  addTask(task:string){
    this.tasks.push(task)
  }
  removeTask(i:number){
    this.tasks.splice(i,1);
  }
}
