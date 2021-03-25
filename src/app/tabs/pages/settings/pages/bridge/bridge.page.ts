import { Component } from '@angular/core';

import { HueService } from './../../../../../services/hue/hue.service';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.page.html',
  styleUrls: ['./bridge.page.scss'],
})
export class BridgePage {

  public bridge;
  public appBridge;

  constructor(public hue: HueService) {
    this.bridge = this.hue.getBridgeInfo();
    this.appBridge = this.hue.hueBridge;
  }

  deleteBridge() {
    this.hue.deleteBridge();
  }
}
