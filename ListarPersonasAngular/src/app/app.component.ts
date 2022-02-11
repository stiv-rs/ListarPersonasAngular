import { LogginService } from './LoggingService.service';
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

  constructor(private logginService:LogginService){}

  personaAgregada(persona: Persona){
    this.logginService.enviaMensajeAConsola("Agrgamos al arreglo la nueva persona: "+persona.nombre);
    this.personas.push(persona);
  }

}
