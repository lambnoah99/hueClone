import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsPageRoutingModule } from './rooms-routing.module';

import { RoomsPage } from './rooms.page';
import { CreateGroupPage } from './pages/create-group/create-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsPageRoutingModule
  ],
  declarations: [RoomsPage, CreateGroupPage]
})
export class RoomsPageModule {}
