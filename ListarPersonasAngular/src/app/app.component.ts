import { LogginService } from './LoggingService.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';
  personas: Persona[] = [];

  constructor(private logginService:LogginService,
              private personaService:PersonaService){}

  ngOnInit(): void {
      this.personas = this.personaService.personas;
  }
  /*personaAgregada(persona: Persona){
    this.logginService.enviaMensajeAConsola("Agrgamos al arreglo la nueva persona: "+persona.nombre);
    //this.personas.push(persona);

    this.personaService.agregarPersona(persona);
  }*/

}
