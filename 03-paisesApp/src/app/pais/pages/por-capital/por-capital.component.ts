import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino:string = ''
  hayError: boolean = false;
  paises: Country[] = [];


  constructor(private paisService: PaisService){

  }


  buscar(termino:string){
    this.hayError = false;
    this.termino = termino

    if(this.termino){
      console.log(termino);
      this.paisService.buscarCapital(this.termino)
        .subscribe({
          next:(paises) => {
            this.paises = paises
            console.log(paises);
          },
          error: (error) => {
            console.error('Error');
            console.error(error);
            this.hayError = true;
            this.paises = [];
          }
        })
    }

    return
  }

}
