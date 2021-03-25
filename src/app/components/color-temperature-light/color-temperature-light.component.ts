import { Component, Input, Output, EventEmitter } from '@angular/core';

import { HueService } from './../../services/hue/hue.service';

@Component({
  selector: 'app-color-temperature-light',
  templateUrl: './color-temperature-light.component.html',
  styleUrls: ['./color-temperature-light.component.scss'],
})
export class ColorTemperatureLightComponent {

  @Input('key') public id: number;
  @Input('light') public light: any

  @Output() allowedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('edit') editEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public hue: HueService) { }

  // Change Light
  public changeLight(id: number, attr: string, val: string, ) {
    this.allowedEvent.emit(true);
    this.hue.changeLight(id, attr, val);
  }

  ctToHex(ct: number, isOn: boolean) {
    if(isOn) {
      if (ct > 152 && ct < 186) return "#a3fff5";
      else if (ct > 186 && ct < 219) return "#adffeb";
      else if (ct > 219 && ct < 252) return "#c7ffd1";  
      else if (ct > 252 && ct < 285) return "#d6ffc2";
      else if (ct > 285 && ct < 318) return "#f0ffa8";
      else if (ct > 318) return "#FFFF99";
    }
  }
  
}
