import { Component, inject, Input } from '@angular/core';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;

  private taskService = inject(TaskService);

  isAddingTask = false;

  get SelectedUserTasks(){
        return this.taskService.getTasks(this.userId);
  }

  onCompleteTask(id: number) {
    this.taskService.removeTask(id);
  }

 onStartAddTask(){
   this.isAddingTask = true;
 }

  onCancelAddTask(){
   this.isAddingTask = false;
 }

}
