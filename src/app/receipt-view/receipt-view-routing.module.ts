import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptViewPage } from './receipt-view.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptViewPageRoutingModule {}
