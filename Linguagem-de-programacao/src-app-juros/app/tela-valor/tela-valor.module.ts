import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaValorPageRoutingModule } from './tela-valor-routing.module';

import { TelaValorPage } from './tela-valor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaValorPageRoutingModule
  ],
  declarations: [TelaValorPage]
})
export class TelaValorPageModule {}
