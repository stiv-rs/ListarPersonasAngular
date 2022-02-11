import { Persona } from "./persona.model";

export class PersonaService{
  personas: Persona[] = [
    new Persona('Juan','Perez'),
    new Persona('Laura','Juarez'),
    new Persona('Andres','Ramirez')
  ];

  agregarPersona(persona: Persona){
    this.personas.push(persona);
  }
}
