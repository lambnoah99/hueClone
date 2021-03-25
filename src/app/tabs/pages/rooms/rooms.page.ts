import { Component } from '@angular/core';

import { HueService } from './../../../services/hue/hue.service';
import { ModalController } from '@ionic/angular';
import { CreateGroupPage } from './pages/create-group/create-group.page';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage {

  public rooms;
  public scenes;

  constructor(public hue: HueService, public modalCtrl: ModalController) {
    console.log('SOOS');
    this.hue.init();
    this.rooms = hue.getGroups();
    this.scenes = hue.getScenes();
  }

  public changeGroupState(id: number, attr: string, val: string) {
    this.hue.changeState(id, attr, val);
  }

  // UI - Functions
  public async openModal() {
    const modal = await this.modalCtrl.create({
      component: CreateGroupPage
    })
    modal.present();
    
  }
}
