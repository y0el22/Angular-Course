import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower:string = 'yoel'
  nombreUpper:string = 'YOEL'
  nombreCompleto:string = 'YoeL TrUjillo'

  fecha:Date = new Date();


}
