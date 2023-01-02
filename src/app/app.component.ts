import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  datos: any = [{
    nombre: 'michell',
    apellido:'quispe',
    edad:'29'
  }];

  registrarDato(nombre:string, apellido:string, edad:string){

  parseInt(edad);

    this.datos.push({
      nombre,apellido,edad
    });
  }
}
