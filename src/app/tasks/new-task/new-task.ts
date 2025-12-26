import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-new-task',
  standalone:false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
@Input({required: true}) userId!: string;
@Output() close = new EventEmitter<void>();
enteredTitle='';
enteredSummary='';
enteredDate='';

private taskService = inject(TaskService);

  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      time: this.enteredDate,
      summary: this.enteredSummary
    }, this.userId)
    this.close.emit();
  }
}
