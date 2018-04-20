import { Component } from '@angular/core';
import { Estado } from './estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  carreras = ['mtto','ti','turismo','gast','terapia'];
  estados = [
    new Estado(1,'Aguascalientes','AG'),
    new Estado(2,'Baja California Norte','BCN'),
    new Estado(3,'Chiapas','CHP'),
    new Estado(4,'Durango','DRG')
  ];
  visible = false;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;

  name:string  = "";
  leyenda:string = "";

  
  mostrar(){
    if(!this.visible){
      this.visible = true;
      this.leyenda = "Activar";
    }else{

      this.visible = false;
      this.leyenda = "Desactivar";
    }
  }
}
