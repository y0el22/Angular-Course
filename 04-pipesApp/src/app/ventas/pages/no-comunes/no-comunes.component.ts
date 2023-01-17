import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Yoel';
  genero:string = 'masculino';

  invitacionMapa ={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['Yoel','carlos','juan','pepe']
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){

    if(this.nombre != 'Maria' && this.genero !='femenino'){

      this.nombre = 'Maria';
      this.genero = 'femenino'
      
    }else{

      this.nombre = 'Yoel'
      this.genero = 'masculino'
    }

  }

  borrarCliente(){
    this.clientes.pop()
  }

  //Keyvalue pipe:
  persona = {
    Nombre:'Yoel',
    Edad:29,
    Direccion:'Santiago'
  }

  //JsonPipe

  heroes =[
    {
      nombre: 'Batman',
      vuela:false
    },
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]

  //Async pipe con observable
  miObservable = interval(4000) // emite desde el 0,1,2,3,4,5,6 cada 1000 ms

  //async pipe con promesa

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data de promesa')
    }, 3500)
  })

}
