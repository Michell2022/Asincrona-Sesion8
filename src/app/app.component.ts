import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  datos: any = [{
    nombre: 'demon',
    apellido:'salvatore',
    edad:22
  }];
    

  registrarDato(nombre:string, apellido:string, edad:string){

  if(nombre.length && apellido.length && edad.length ){
    this.datos.push({
      nombre,apellido,edad
    });
    
  }else{
    Swal.fire('[ ERROR ] DEBE LLENAR TODOS LOS CAMPOS')
  }

    
    
  }
}
