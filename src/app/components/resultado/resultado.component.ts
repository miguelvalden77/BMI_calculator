import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  constructor(private route: ActivatedRoute) { }

  valor: number = Number(this.route.snapshot.paramMap.get("valor"))
}
