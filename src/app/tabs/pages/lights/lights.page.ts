import { Component } from '@angular/core';

import { timer} from 'rxjs';
import { HueService } from './../../../services/hue/hue.service';
import { ModalController } from '@ionic/angular';
import { LightPage } from './pages/light/light.page';


@Component({
  selector: 'app-lights',
  templateUrl: './lights.page.html',
  styleUrls: ['./lights.page.scss'],
})
export class LightsPage {

  lights;
  allowedToRefresh = true;

  constructor(public hue: HueService, public modalCtrl: ModalController) {
    timer(1000, 1000).subscribe(x => this.refreshLights());
  }

  //Refresh Lights
  public refreshLights() {
    if(this.allowedToRefresh == true) {
      this.hue.getLights().subscribe(data => {
        this.lights = data;
      });
    }
  }


  /*
    Ui -Functions
  */

    public async openModal(data: Array<any>) {
      const modal = await this.modalCtrl.create({
        component: LightPage,
        componentProps: {
          light: data[0],
          id: data[1]
        },
        swipeToClose: true
      });
      await modal.present();
    }
}
