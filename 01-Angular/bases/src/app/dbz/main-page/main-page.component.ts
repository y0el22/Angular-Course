import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


    // get personajes(): Personaje[]{
    //   return this.dbzServices.personajes
    // }

    nuevo: Personaje = {
      nombre:'Yoel',
      poder:500
    }

    // agregarNuevoPersonaje(argumento:Personaje){
      
    //   console.log('Main Page Component');
    //   console.log(argumento);
    //   this.personajes.push(argumento)
    // }

    constructor(){

    }

}
