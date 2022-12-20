import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h2>la base es de: {{base}}</h2>

    <button (click)="operacionBase(base);" >+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="operacionBase(-base)">-{{base}}</button>  
    `
})
export class ContadorComponent{

    titulo:string = 'Contador App';
    numero:number = 10;
    base:number = 2;
    // sumar = () => this.numero++;
    // restar = () => this.numero--;

    operacion = (valor:number) => {
        this.numero +=valor;
    }

    operacionBase = (valor:number) => {
        this.numero += valor;
    }

}