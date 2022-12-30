import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nom=['michell']

  registrarDato(nombre:string, apellido:string, edad:number){

    this.nom.push(String(nombre));
  }
}
