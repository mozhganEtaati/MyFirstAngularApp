import { NgModule } from "@angular/core";
import { AppComponent } from "./app";
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user";
import { TasksComponent } from "./tasks/tasks";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations:[AppComponent], //that array declare and register all components that need to work together
    bootstrap:[AppComponent],
    imports:[BrowserModule,HeaderComponent, UserComponent,TasksComponent] // this item can be used for standalone components
})
export class AppModule{

}