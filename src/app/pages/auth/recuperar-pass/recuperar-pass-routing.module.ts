import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarPassPage } from './recuperar-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPassPageRoutingModule {}
