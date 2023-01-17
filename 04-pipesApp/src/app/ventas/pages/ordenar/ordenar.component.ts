import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { OrdenarPipe } from '../../pipes/ordenar.pipe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  ordenarPor:string ='';
  enMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
     nombre: 'Superman',
     vuela:true,
     color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela:false,
      color: Color.negro
     },
     {
      nombre: 'Robin',
      vuela:false,
      color: Color.verde
     },
     {
      nombre: 'Daredevil',
      vuela:false,
      color: Color.rojo
     },
     {
      nombre: 'Linterna Verde',
      vuela:true,
      color: Color.verde
     }
  ]

  cambiarMayusculas():void{
    
    this.enMayusculas = !this.enMayusculas;

  }

  cambiarOrden( valor:string){
    this.ordenarPor = valor;
  }


}
