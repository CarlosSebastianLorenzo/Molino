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
  }

}

