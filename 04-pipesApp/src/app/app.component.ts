import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'yOel'
  valor:number = 10000000
  obj = {
    nombre:'Yoel'
  }

  mostrar(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
