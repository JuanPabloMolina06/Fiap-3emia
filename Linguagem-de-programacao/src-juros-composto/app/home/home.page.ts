import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pinFormatter(value: number){
    return `${value}%`;
  }

  valorPrestacao=0;
  valorTaxa=0;
  valorMeses=0;
  valorPorcentagem=0;

  constructor(public router: Router) {}

  calcular(){
    let i = 0;

    while(i < this.valorMeses){
      this.valorPrestacao = ((this.valorPrestacao / 100) * this.valorTaxa) + this.valorPrestacao
      i++
    }

    this.router.navigateByUrl
    (`tela-valor/${this.valorPrestacao}/${this.valorTaxa}`)
  }

}
