import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [
    new Persona('Juan','Perez'),
    new Persona('Laura','Juarez'),
    new Persona('Andres','Ramirez')
  ];

  nombreImput:string = '';
  apellidoImput:string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreImput, this.apellidoImput);
    this.personas.push(persona1);
  }

}
