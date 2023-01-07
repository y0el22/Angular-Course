import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  constructor(private paisServicio:PaisService){

  }

  regiones:string[] = ['africa' , 'americas', 'asia' ,'europe', 'oceania'];
  paisesDeRegion:Country[] = []
  regionActiva:string = '';


  
  getClaseCSS(region:string){
    return (region === this.regionActiva) ? 'btn btn-info': 'btn btn-secondary'
  }
  
  activarRegion(region:string){
    if (region === this.regionActiva) {
      return;
    }
    
    this.regionActiva = region
    this.paisServicio.buscarRegion(region)
    .subscribe((region) => {
      this.paisesDeRegion = region
      console.log(region);
    })
    
  }


}
