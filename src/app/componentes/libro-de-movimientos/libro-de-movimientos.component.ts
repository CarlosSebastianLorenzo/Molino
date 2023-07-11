import { Component } from '@angular/core';
import { Movimiento } from 'src/app/movimiento';

@Component({
  selector: 'app-libro-de-movimientos',
  templateUrl: './libro-de-movimientos.component.html',
  styleUrls: ['./libro-de-movimientos.component.css']
})
export class LibroDeMovimientosComponent {
  movimientos : Movimiento[] = [
    {
      Fecha: "01/01/2015",
      Cliente: "Charreun Flavio",
      Moneda: "Ch Prov BsAs",
      Nro: "0025",
      FechaDePago: "01/01/2015",
      Monto: 25000,
    },
    {
      Fecha: "01/01/2015",
      Cliente: "Charreun Flavio",
      Moneda: "Ch Prov BsAs",
      Nro: "0025",
      FechaDePago: "01/01/2015",
      Monto: 25000,
    }
  ]
}
