import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Task } from '../TaskModel';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ToDoComponent implements OnInit {
  public tasks:Task[]=[];
  constructor(private _todo:ToDoService) { }
  ngOnInit(): void {
      this._todo.initTask().subscribe(res=>{
        this.tasks=res;
      });
  }

  addTask(task:HTMLInputElement){
    if(task.value=='')
      return;
    this._todo.addTask({task:(task.value)});
    task.value='';
  }
  removeTask(i:number){
    this._todo.removeTask(i);
  }
}
