import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightsPageRoutingModule } from './lights-routing.module';
import { LightsPage } from './lights.page';

import { OnOffLightComponent } from './../../../components/on-off-light/on-off-light.component';
import { DimmableLightComponent } from './../../../components/dimmable-light/dimmable-light.component';
import { ColorTemperatureLightComponent } from './../../../components/color-temperature-light/color-temperature-light.component';
import { ExtendedColorLightComponent } from './../../../components/extended-color-light/extended-color-light.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightsPageRoutingModule
  ],
  declarations: [LightsPage, OnOffLightComponent, DimmableLightComponent, ColorTemperatureLightComponent, ExtendedColorLightComponent]
})
export class LightsPageModule {}
