import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task";
import { TaskComponent } from "./task/task";
import { TasksComponent } from "./tasks";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NewTaskComponent,TaskComponent,TasksComponent],
  exports:[TasksComponent],
 imports:[FormsModule,SharedModule,CommonModule]
})
export class TasksModule{}