import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaValorPage } from './tela-valor.page';

const routes: Routes = [
  {
    path: '',
    component: TelaValorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaValorPageRoutingModule {}
