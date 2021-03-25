import { Component, Input, Output, EventEmitter } from '@angular/core';

import { HueService } from './../../services/hue/hue.service';

@Component({
  selector: 'app-on-off-light',
  templateUrl: './on-off-light.component.html',
  styleUrls: ['./on-off-light.component.scss'],
})
export class OnOffLightComponent{

  @Input('light') public light: any;
  @Input('key') public id: number;

  @Output('edit') editEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public hue: HueService) { }

  public changeLight(id: number, state: string) {
    this.hue.changeLight(id, "on", state);
  }
}
