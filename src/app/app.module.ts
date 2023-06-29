import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AltaDeCuentaComponent } from './componentes/alta-de-cuenta/alta-de-cuenta.component';
import { LibroDeMovimientosComponent } from './componentes/libro-de-movimientos/libro-de-movimientos.component';
import { SaldosComponent } from './componentes/saldos/saldos.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaDeCuentaComponent,
    LibroDeMovimientosComponent,
    SaldosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
