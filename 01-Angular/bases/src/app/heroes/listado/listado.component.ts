import { Component  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados:string[] = []
  heroeBorrado?:string = '';

  borrarHeroe(i:number){
    console.log('Borrando...')
    this.heroeBorrado = this.heroes.shift();

    if(this.heroeBorrado){
      this.heroesBorrados.push(this.heroeBorrado)
    }
    console.log(this.heroesBorrados)
  }

}
