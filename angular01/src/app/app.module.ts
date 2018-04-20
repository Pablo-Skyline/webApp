import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentUnoComponent } from './component-uno/component-uno.component';
import { ComponentDosComponent } from './component-dos/component-dos.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentUnoComponent,
    ComponentDosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
