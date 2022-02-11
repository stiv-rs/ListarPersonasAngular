import { PersonaService } from './../personas.service';
import { LogginService } from './../LoggingService.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';
  //@ViewChild('nombreInput') nombreInput: ElementRef ;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private logginService: LogginService,
              private personaService:PersonaService){
                this.personaService.saludar.subscribe(
                  (indice: number)=>alert("El indice es: "+ indice)
                );
              }
  ngOnInit() {

  }
  agregarPersona(){
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput);
      //this.logginService.enviaMensajeAConsola("Envia persona con nombre: "+ persona1.nombre + " apellido: "+ persona1.apellido);
      //this.personaCreada.emit(persona1);
      this.personaService.agregarPersona(persona1);
  }

}
