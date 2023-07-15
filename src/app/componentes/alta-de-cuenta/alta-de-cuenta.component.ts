import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/cuenta';

@Component({
  selector: 'app-alta-de-cuenta',
  templateUrl: './alta-de-cuenta.component.html',
  styleUrls: ['./alta-de-cuenta.component.css']
})
export class AltaDeCuentaComponent implements OnInit {
  nombre = "";

  constructor (){}

  ngOnInit(): void {
  }

  onSubmit():void{
    if(this.nombre.length === 0){
      alert("Para dar de alta una cuenta escriba un nombre");
      return
    };

    const nuevaCuenta:Cuenta = {
      nombre: this.nombre
    };

    console.log(nuevaCuenta);

    this.nombre = ""
  }

}
