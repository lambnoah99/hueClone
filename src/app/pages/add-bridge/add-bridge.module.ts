import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBridgePageRoutingModule } from './add-bridge-routing.module';

import { AddBridgePage } from './add-bridge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBridgePageRoutingModule
  ],
  declarations: [AddBridgePage]
})
export class AddBridgePageModule {}
