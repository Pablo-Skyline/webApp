import { Component } from '@angular/core';
import { ComponentUnoComponent } from './component-uno/component-uno.component';
import { ComponentDosComponent } from './component-dos/component-dos.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  title = 'Mi primer app en angular';
  autor = 'Pablo Koyoc Tinal'
}
