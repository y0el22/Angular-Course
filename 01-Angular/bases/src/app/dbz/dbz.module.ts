import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule //Modulo para trabajar con formularios esta este y el de formularios reactivos
  ],
  exports:[MainPageComponent]
})
export class DbzModule { }
