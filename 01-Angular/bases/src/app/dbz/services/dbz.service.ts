import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzServices{

    private _personajes: Personaje[] = [
        {nombre: 'Veguetta', poder:50000},
        {nombre:'Mr Satan', poder:100}
      ]


      get personajes(): Personaje[]{
        return [...this._personajes];
      }

    constructor(){}

      agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje)
      }


}