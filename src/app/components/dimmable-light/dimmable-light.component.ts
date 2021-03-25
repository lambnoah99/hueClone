import { Component, Input, Output, EventEmitter} from '@angular/core';

import { HueService } from './../../services/hue/hue.service';

@Component({
  selector: 'app-dimmable-light',
  templateUrl: './dimmable-light.component.html',
  styleUrls: ['./dimmable-light.component.scss'],
})
export class DimmableLightComponent {

  @Input('key') public id: number;
  @Input('light') public light: any;

  @Output() allowedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  @Output('edit') editEvent: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(public hue: HueService) {
  }

  // Change Light
  public changeLight(id: number, attr: string, val: string, ) {
    this.allowedEvent.emit(true);
    this.hue.changeLight(id, attr, val);
  }
}
