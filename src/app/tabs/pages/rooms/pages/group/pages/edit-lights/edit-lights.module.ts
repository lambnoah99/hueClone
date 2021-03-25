import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLightsPageRoutingModule } from './edit-lights-routing.module';

import { EditLightsPage } from './edit-lights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLightsPageRoutingModule
  ],
  declarations: [EditLightsPage]
})
export class EditLightsPageModule {}
