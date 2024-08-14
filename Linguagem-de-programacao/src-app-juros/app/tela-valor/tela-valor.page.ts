import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-valor',
  templateUrl: './tela-valor.page.html',
  styleUrls: ['./tela-valor.page.scss'],
})
export class TelaValorPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  valorPrestacao:any;
  valorTaxa:any;

  ngOnInit() {
    this.valorPrestacao = this.activatedRoute.snapshot.paramMap.get("valorPrestacao")
    this.valorTaxa = this.activatedRoute.snapshot.paramMap.get("valorTaxa")
  }

}
