import { Injectable } from "@angular/core";
import { newTaskModel } from "./task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
private tasks = [
    {
      id: 1,
      title: 'Design Landing Page',
      time: '2025-01-10 09:00',
      summary: 'Create initial layout and wireframe',
      userId: 'u1',
    },
    {
      id: 2,
      title: 'Fix Login Bug',
      time: '2025-01-10 11:30',
      summary: 'Resolve authentication issue on mobile',
      userId: 'u2',
    },
    {
      id: 3,
      title: 'Prepare Presentation',
      time: '2025-01-10 14:00',
      summary: 'Slides for weekly meeting',
      userId: 'u2',
    },
    {
      id: 4,
      title: 'API Integration',
      time: '2025-01-11 10:00',
      summary: 'Connect frontend to tasks API',
      userId: 'u2',
    },
    {
      id: 5,
      title: 'Write Unit Tests',
      time: '2025-01-11 13:00',
      summary: 'Add coverage for task service',
      userId: 'u2',
    },
    {
      id: 6,
      title: 'Update Documentation',
      time: '2025-01-12 09:30',
      summary: 'Refresh README and setup steps',
      userId: 'u2',
    },
    {
      id: 7,
      title: 'Code Review',
      time: '2025-01-12 15:00',
      summary: 'Review pull requests',
      userId: 'u1',
    },
    {
      id: 8,
      title: 'Deploy to Staging',
      time: '2025-01-13 16:00',
      summary: 'Deploy latest build to staging server',
      userId: 'u2',
    },
  ];
 
  constructor()
  {
   const tasks=localStorage.getItem('tasks');
   if(tasks)
        this.tasks=JSON.parse(tasks);
  }

 addTask(taskModel: newTaskModel, userId: string) {
    this.tasks.unshift({
      id: this.tasks[this.tasks.length - 1].id + 1,
      summary: taskModel.summary,
      time: taskModel.time,
      title: taskModel.title,
      userId: userId,
    });
    this.saveTasks()
  }

  getTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks()
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}