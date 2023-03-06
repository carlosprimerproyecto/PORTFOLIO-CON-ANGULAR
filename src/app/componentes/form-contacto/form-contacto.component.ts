import { Component } from '@angular/core';





@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})


export class FormContactoComponent {
  nombre: string='nombre';
  email: string='email';
  mensaje: string='mensaje';


  constructor(){}


  enviar() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
    console.log(`Mensaje: ${this.mensaje}`);

   
  }

 
}
