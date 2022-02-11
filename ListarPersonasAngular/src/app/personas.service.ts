import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './LoggingService.service';
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService{
  personas: Persona[] = [
    new Persona('Juan','Perez'),
    new Persona('Laura','Juarez'),
    new Persona('Andres','Ramirez')
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService:LogginService){}

  agregarPersona(persona: Persona){
    this.logginService.enviaMensajeAConsola("Envia persona con nombre: "+ persona.nombre + " apellido: "+ persona.apellido);
    this.personas.push(persona);
  }
}
