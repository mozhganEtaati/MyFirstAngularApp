import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from './task.service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
@Input({required:true}) task!:Task;
@Output() complete = new EventEmitter<string>();

  taskService = inject(TaskService);

  onComplete() {
    this.taskService.removeTask(this.task.id);
  }
}
