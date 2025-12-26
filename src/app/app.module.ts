import { NgModule } from "@angular/core";
import { AppComponent } from "./app";
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user";
import { TasksComponent } from "./tasks/tasks";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/card/shared.module";
import { CommonModule } from "@angular/common";
import { NewTaskComponent } from "./tasks/new-task/new-task";
import { TaskComponent } from "./tasks/task/task";


@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent,NewTaskComponent,TaskComponent,TasksComponent], //that array declare and register all components that need to work together
    bootstrap:[AppComponent],
    imports:[BrowserModule,FormsModule,SharedModule,CommonModule] // this item can be used for standalone components
})
export class AppModule{

}