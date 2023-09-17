import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { sex } from 'src/app/interfaces/types';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  edad: number = 30
  peso: number = 60
  altura: number = 160
  sexo: sex = "Hombre"

  constructor(private router: Router) { }

  updatePeso(symbol: string) {

    if (symbol == "-") {
      this.peso -= 1
    }

    if (symbol == "+") {
      this.peso += 1
    }
  }

  updateEdad(symbol: string) {

    if (symbol == "-") {
      this.edad -= 1
    }

    if (symbol == "+") {
      this.edad += 1
    }
  }

  updateSexo(sexo: sex) {

    if (sexo == "Hombre") {
      this.sexo = "Hombre"
    }

    if (sexo == "Mujer") {
      this.sexo = "Mujer"
    }
  }

  calcularBMI() {

    const BMI = this.peso / Math.pow(this.altura / 100, 2)

    this.router.navigate(["/resultado", BMI.toFixed(1)])
  }


}
