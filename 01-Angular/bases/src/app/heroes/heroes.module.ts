import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    /*Declarations: dicen que cosas componen este módulo, por ejemplo que componentes, pipes, etc.
    Todo lo que definamos dentro de las declaraciones es invisible para el resto de la aplicación
    Excepto para los componentes que estan definidos dentro de ese módulo.*/
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Que queremos que sea publico o visible fuera de este módulo:
    exports:[
        ListadoComponent
    ],
    //En los imports van solamente los ngModules
    imports:[
        CommonModule
    ]

})
export class HeroesModule{

}