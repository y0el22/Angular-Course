import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


    personajes: Personaje[] = [
      {nombre: 'Veguetta', poder:50000},
      {nombre:'Mr Satan', poder:100}
    ]

    nuevo: Personaje = {
      nombre:'Yoel',
      poder:500
    }

    agregarNuevoPersonaje(argumento:Personaje){
      console.log('Main Page Component');
      console.log(argumento);
      this.personajes.push(argumento)
    }

}
