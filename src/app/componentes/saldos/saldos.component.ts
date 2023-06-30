import { Component } from '@angular/core';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.css']
})
export class SaldosComponent {
  cuentas = [
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
