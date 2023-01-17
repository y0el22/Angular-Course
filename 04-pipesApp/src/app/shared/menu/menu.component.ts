import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items:MenuItem[] = []

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label:'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label:'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label:'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink:'ordenar',
        items:[
          
        ]
      }
  ];
 
  }

}
