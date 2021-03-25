import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HueService } from './../../../../../services/hue/hue.service';

import { timer } from 'rxjs';
import { ModalController } from '@ionic/angular';

import { EditLightsPage } from './pages/edit-lights/edit-lights.page';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage  {

  public groupId: number;
  public group: any;
  public scenes: any;
  public lights: any;


  public isReady: boolean = false;
  allowedToRefresh = true;

  activeSegment = "scenes";

  constructor(public route: ActivatedRoute, public hue: HueService, public modalCtrl: ModalController) {
    // Get passed project Id
    this.groupId = Number(this.route.snapshot.paramMap.get('groupId'));

    this.getData();

    timer(750, 1000).subscribe(x => this.refreshLights());

  }

  //Refresh Lights
  private refreshLights() {
    if(this.allowedToRefresh == true) {
      this.hue.getLights().subscribe(data => {
        this.lights = data;
      });
    }
  }

  private getData() {
      this.hue.getGroup(this.groupId).subscribe(data => {
        this.group = data;
        this.hue.getScenes().subscribe(data => {
          this.scenes = data;

          this.isReady = true;
        })
      });
  }

  // Set a Scene
  public setScene(sceneId: string) {
    this.hue.setScene(this.groupId, sceneId);
  }

  // Change attributes of the group
  public changeAttributes(name: string, val: any) {
    this.hue.changeAttribute(this.groupId, name, val)
  }


  /*
    UI-Functions
  */
 
  // Change the current Segment
  public changeSegment(ev: any) {
    this.activeSegment = ev;
  }

  async presentLightEditModal() {
    const modal = await this.modalCtrl.create({
      component: EditLightsPage,
      componentProps: {
        groupId: this.groupId,
        groupLights: this.group.lights,
        lights: this.lights,
        modal: this.modalCtrl
      }
    });
    return await modal.present();
  }
}
