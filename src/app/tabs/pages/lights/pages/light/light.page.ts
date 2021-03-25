import { Component, Input } from '@angular/core';

import { HueService } from './../../../../../services/hue/hue.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-light',
  templateUrl: './light.page.html',
  styleUrls: ['./light.page.scss'],
})
export class LightPage  {

  @Input('light') public light: any;
  @Input('id') public id: any;

  constructor(public modalCtrl: ModalController, public hue: HueService) { }

  changeName(val: string) {
    this.hue.changeLightAttribute(this.id, "name", val);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }


}
