import { Component } from '@angular/core';
import { Movimiento } from 'src/app/movimiento';

@Component({
  selector: 'app-nuevo-movimiento',
  templateUrl: './nuevo-movimiento.component.html',
  styleUrls: ['./nuevo-movimiento.component.css']
})
export class NuevoMovimientoComponent {
  nombre = "";

  constructor (){}

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length === 0){
      alert("Para dar de alta una cuenta escriba un nombre");
      return
    }
  

    const nuevoMovimiento:Movimiento = {
      Fecha: "01/01/2023",
      Cliente: this.nombre,
      Moneda: "Ch Prov BsAs",
      Nro: "0025",
      FechaDePago: "01/01/2015",
      Monto: 25000
    };

    console.log(nuevoMovimiento);

    this.nombre = ""
  }

}