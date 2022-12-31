import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre:'',
    poder:0
  }

  constructor(private dbzServices:DbzServices  ){ //Inyectando el servicio DbzServices
      
  }
  
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}

      //this.onNuevoPersonaje.emit(this.nuevo)
      this.dbzServices.agregarPersonaje(this.nuevo) //Utilizando el servicio que inyectamos en el constructor

      this.nuevo = {
        nombre:'', 
        poder:0
      }
    }
}
