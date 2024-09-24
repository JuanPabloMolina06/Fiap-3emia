import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';

  cep2: string = '';
  logradouro2: string = '';
  bairro2: string = '';
  cidade2: string = '';
  uf2: string = '';

  lista: any;

  constructor(private http: HttpClient) {}


  valorCEP() {
    const url = `https://viacep.com.br/ws/${this.cep}/json/`;
    if(this.cep !== ''){
      this.http.get(url).subscribe(
        (data: any) => {
        this.logradouro = data.logradouro;
        this.bairro = data.bairro
        this.cidade = data.localidade
        this.uf = data.uf
      },
      (erro) => {
        console.error('Erro ao consultar CEP:', erro);
        alert('Erro ao consultar CEP. Verifique se o CEP está correto.');
      }
      )
    }
    else{
      alert('Por favor, insira um CEP válido.');
    }
  }

  valorCEP2() {
    const url2 = `https://viacep.com.br/ws/${this.uf2}/${this.cidade2}/${this.logradouro2}/json/`;
    if (this.uf2 !== '' && this.cidade2 !== '' && this.logradouro2 !== '') {
      this.http.get(url2).subscribe(
        (data: any) => {
          this.lista = data
        },
      );
    } else {
      alert('Por favor, insira os dados fornecidos nos campos acima.');
    }
  }
}
