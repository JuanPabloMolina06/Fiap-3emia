import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-valor',
  templateUrl: './tela-valor.page.html',
  styleUrls: ['./tela-valor.page.scss'],
})
export class TelaValorPage implements OnInit {

  mediaMeses:any;
  cultura:any;
  frutas:any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.mediaMeses = this.activatedRoute.snapshot.paramMap.get('mediaMeses')
    this.cultura = this.activatedRoute.snapshot.paramMap.get('cultura')
    this.frutas = this.activatedRoute.snapshot.paramMap.get('frutas')
  }

  cancelar(){
    this.router.navigateByUrl(`/home`)
  }

}
