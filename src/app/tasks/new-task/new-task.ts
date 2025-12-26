import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
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
