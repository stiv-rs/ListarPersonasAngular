import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();
  //nombreImput:string = '';
  //apellidoImput:string = '';

  agregarPersona(nombreImput:HTMLInputElement, apellidoImput:HTMLInputElement){
    let persona1 = new Persona(nombreImput.value, apellidoImput.value);
    this.personaCreada.emit(persona1);
  }

}
