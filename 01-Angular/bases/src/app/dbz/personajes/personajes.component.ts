import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent {

  constructor(private dbzService:DbzServices){

  }

   //Manera sin framework de evitar que se haga el posteo al hacer click en el botón con submit
  // agregar(event:any){
  //   event.preventDefault()
  //   console.log('hey')
  // }

  //Forma de manejar con angular sin agregar preventDefault
  //Utilizando un ngSubmit en el template e importando el FormsModule en el Modulo.
  

  //Método innecesario si se utiliza el ngModel junto con el [()] two way binding
  // cambiarNombre(event:any){
  //   console.log(event.target.value)
  // }

  //@Input() personajes: Personaje[] = [] Significa que los personajes van a venir del componente padre el parametro que se le pasa es opcional y es el nombre con el que queremos que sea conocido al usarlo
  
  get personajes(){
    return this.dbzService.personajes
  }



}
