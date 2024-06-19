import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

mes1=0;
mes2=0;
mes3=0;
mes4=0;
mediaMeses=0;
cultura='';
frutas='';


  constructor(public router: Router) {}

  calcular(){
    this.mediaMeses = Number(((this.mes1 + this.mes2 + this.mes3 + this.mes4)/4).toFixed(0)); //perguntar para o professor porque estava dando erro com math.round: this.mediaMeses = Math.round((this.mes1 + this.mes2 + this.mes3 + this.mes4)/4).toFixed(0);
    
    if (this.mediaMeses <= -21) {
      this.cultura = `Se a temperatura média dos meses for ${this.mediaMeses.toFixed(0)}°C. Infelizmente não há frutas que possam ser cultivadas nessa temperatura.`;
      this.frutas = '';
    } 
    else if (this.mediaMeses >= -20 && this.mediaMeses <= 0) {
      this.cultura = `Se a temperatura média dos meses for ${this.mediaMeses.toFixed(0)}°C.`;
      this.frutas = ["Mirtilo", "Cranberry", "Groselha", "Zimbro", "Sabugueiro"].toString();
    } 
    else if (this.mediaMeses >= 1 && this.mediaMeses <= 19) {
      this.cultura = `Se a temperatura média dos meses for ${this.mediaMeses.toFixed(0)}°C.`;
      this.frutas = ["Maça", "Pera", "Ameixa", "Cereja", "Groselha"].toString();
    } 
    else if (this.mediaMeses >= 20 && this.mediaMeses <= 25) {
      this.cultura = `Se a temperatura média dos meses for ${this.mediaMeses.toFixed(0)}°C.`;
      this.frutas = ["Banana", "Abacate", "Manga", "Maracujá", "Limão"].toString();
    } 
    else if (this.mediaMeses >= 30 && this.mediaMeses <= 35) {
      this.cultura = `Se a temperatura média dos meses for ${this.mediaMeses.toFixed(0)}°C.`;
      this.frutas = ["Coco", "Abacaxi", "Laranja", "Mamão", "Lichia"].toString();
    } 
    else if (this.mediaMeses >= 40) {
      this.cultura = `Se a temperatura média dos meses for ${this.mediaMeses.toFixed(0)}°C. Infelizmente não há frutas que possam ser cultivadas nessa temperatura.`;
      this.frutas = '';
    }

    this.router.navigateByUrl(`/tela-valor/${this.mediaMeses}/${this.cultura}/${this.frutas}`);
}

}