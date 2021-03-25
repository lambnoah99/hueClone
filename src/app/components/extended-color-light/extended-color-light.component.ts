import { Component, Input, Output, EventEmitter } from '@angular/core';

import { HueService } from './../../services/hue/hue.service';


@Component({
  selector: 'app-extended-color-light',
  templateUrl: './extended-color-light.component.html',
  styleUrls: ['./extended-color-light.component.scss'],
})
export class ExtendedColorLightComponent {

  @Input('key') public id: number;
  @Input('light') public light: any;

  @Output() allowedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('edit') editEvent: EventEmitter<any> = new EventEmitter<any>();

  public colorMode: boolean;

  constructor(public hue: HueService) { }

  // Change Light
  public changeLight(id: number, attr: string, val: string, ) {
    this.allowedEvent.emit(true);
    this.hue.changeLight(id, attr, val);
  }

  // Color Helpers
  public hueToSatGradient(hue: number) {
    hue = hue / 187;
    return `linear-gradient(to right, hsl(${hue}, 0%, 50%), hsl(${hue}, 100%, 50%))`;
  }

  // Color Helpers
  public hueToBriGradient(hue: number) {
    hue = hue / 187;
    return `linear-gradient(to right, hsl(${hue}, 0%, 0%), hsl(${hue}, 100%, 50%))`;
  }

}
