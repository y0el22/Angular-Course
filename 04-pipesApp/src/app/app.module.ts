import { NgModule, LOCALE_ID } from '@angular/core'; //LOCALE_ID para establecer el idioma local
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';


//Modulo personalizado:
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localEs from '@angular/common/locales/es-CL'
import localFr from '@angular/common/locales/fr-CA'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localEs);
registerLocaleData(localFr);


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    RippleModule
  ],
  exports:[
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-CL'} // idioma se settea aqui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
