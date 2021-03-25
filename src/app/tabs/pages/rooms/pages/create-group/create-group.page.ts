import { Component } from '@angular/core';

import { HueService } from './../../../../../services/hue/hue.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage {

  public lights: any;

  public name: string;
  public type: string;
  public category: string;

  public selectedLights: Array<Number> = [];

  constructor(public hue: HueService, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    hue.getLights().subscribe(data => {
      this.lights = data;
    });
  }

  arrayChange(checked: boolean, id: number) {
    if(checked) this.selectedLights.push(id);
    else this.selectedLights.splice(this.selectedLights.indexOf(Number(id)), 1);
  }

  async submit() {
    console.log(this.name, this.type, this.category)
    if(!this.name || !this.type || !this.category || this.selectedLights.length == 0) {
      const alert = await this.alertCtrl.create({
        header: 'Failure',
        message: 'Please fill out all Fields',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              this.modalCtrl.dismiss();
            }
          },
          {
            text: 'Ok',
            role: 'cancel'
          }
        ]
      });
      await alert.present();

    } else {
      this.hue.createGroup(this.selectedLights, this.name, this.type, this.category).subscribe(val => { console.log(val)});
      this.modalCtrl.dismiss();
    }
  }


}
