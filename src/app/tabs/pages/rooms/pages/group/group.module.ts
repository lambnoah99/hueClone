import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPageRoutingModule } from './group-routing.module';

import { GroupPage } from './group.page';

import { ExtendedColorLightComponent } from './../../../../../components/extended-color-light/extended-color-light.component';
import { ColorTemperatureLightComponent } from './../../../../../components/color-temperature-light/color-temperature-light.component';
import { DimmableLightComponent } from './../../../../../components/dimmable-light/dimmable-light.component';
import { OnOffLightComponent } from './../../../../../components/on-off-light/on-off-light.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPageRoutingModule
  ],
  declarations: [GroupPage, ExtendedColorLightComponent, ColorTemperatureLightComponent, DimmableLightComponent, OnOffLightComponent]
})
export class GroupPageModule {}
