import { Router } from '@angular/router';
import { HueService } from './../../../../../../../services/hue/hue.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-lights',
  templateUrl: './edit-lights.page.html',
  styleUrls: ['./edit-lights.page.scss'],
})
export class EditLightsPage {

  @Input('groupId') groupId: number;
  @Input('groupLights') public groupLights: Array<String>;
  @Input('lights') public lights: any;
  @Input('modal') public modal: any;

  constructor(public hue: HueService, public router: Router) { }

  public isInThisGroup(key: string): boolean {
    return this.groupLights.includes(key);
  }

  alterLight(id: number, val: boolean) {
    if(val) {
      this.groupLights.push(String(id));
    } else {
      this.groupLights.splice(this.groupLights.indexOf(String(id)), 1);
    }
  }

  // Confirm Changes to Lights
  confirm() {
    this.hue.changeAttribute(this.groupId, 'lights', this.groupLights);
    this.modal.dismiss();
  }


}
