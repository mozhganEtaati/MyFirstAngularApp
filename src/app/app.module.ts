import { NgModule } from "@angular/core";
import { AppComponent } from "./app";
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent], //that array declare and register all components that need to work together
    bootstrap:[AppComponent],
    imports:[BrowserModule,SharedModule,TasksModule] // this item can be used for standalone components
})
export class AppModule{

}