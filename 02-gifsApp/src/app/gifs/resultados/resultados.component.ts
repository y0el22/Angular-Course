import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(private gifsService:GifsService){

  }

  //resultado:any[] = this.gifsService.resultados
  get resultados(){
    return this.gifsService.resultados
  }

}
