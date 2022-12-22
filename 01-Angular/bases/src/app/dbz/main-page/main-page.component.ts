import { Component } from '@angular/core';

interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //Manera sin framework de evitar que se haga el posteo al hacer click en el botón con submit
  // agregar(event:any){
  //   event.preventDefault()
  //   console.log('hey')
  // }

  //Forma de manejar con angular sin agregar preventDefault
  //Utilizando un ngSubmit en el template e importando el FormsModule en el Modulo.
  agregar(){
      console.log(this.nuevo)
    }

  //Método innecesario si se utiliza el ngModel junto con el [()] two way binding
  // cambiarNombre(event:any){
  //   console.log(event.target.value)
  // }

    nuevo: Personaje = {
      nombre:'Trunks',
      poder:10000
    }

}
