import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['../../app.component.css']
})
export class HeroeComponent{

    nombre:string = 'Iron Man';
    edad:number = 35;

    
    public get nombreCapitalizado():string {
        return this.nombre.toUpperCase()
    }
    

    obtenerNombre():string{
        return ` ${this.nombre} - ${this.edad}`
    }

    cambiarHeroe():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(numero:number):void{
        this.edad = numero;
    }

}