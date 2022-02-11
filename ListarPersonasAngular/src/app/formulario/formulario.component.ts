import { LogginService } from './../LoggingService.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput:string = '';
  //apellidoInput:string = '';
  @ViewChild('nombreInput') nombreInput: ElementRef ;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private logginService: LogginService){}
  ngOnInit() {

  }
  agregarPersona(){
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value);
      this.logginService.enviaMensajeAConsola("Envia persona con nombre: "+ persona1.nombre + " apellido: "+ persona1.apellido);
    this.personaCreada.emit(persona1);
  }

}
