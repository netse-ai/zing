import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiptViewPageRoutingModule } from './receipt-view-routing.module';

import { ReceiptViewPage } from './receipt-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiptViewPageRoutingModule
  ],
  declarations: [ReceiptViewPage]
})
export class ReceiptViewPageModule {}
