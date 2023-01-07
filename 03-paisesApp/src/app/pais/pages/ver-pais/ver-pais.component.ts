import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent {

  pais!:Country;


  constructor(
            private activatedRoute: ActivatedRoute, 
            private paisService: PaisService
            
            ){ } //El ActivatedRoute viene con todo lo necesario para poder suscribirnos a cualquier cambio de url

  ngOnInit(): void {

     /******** MANERA CON RxJs *************/
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id)), //El switchMap toma un observable y devuelve otro (Toma obsrvable params y devuelve el getPaisPorAlpha en este caso) Especialmente útil para no hacer un subscribe de un subscribe
        tap(console.log) // el tap dispara un efecto secundario, en este caso un console.log del producto del observable sin ejecutar el console.log()
      )
      .subscribe(pais => this.pais = pais[0]);


    /***********MANERA SIN RxJs****************/
    // this.activatedRoute.params 
    //   .subscribe(({id}) =>{
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   })
  }

}
