import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorTemperatureLightComponent } from './color-temperature-light.component';

describe('ColorTemperatureLightComponent', () => {
  let component: ColorTemperatureLightComponent;
  let fixture: ComponentFixture<ColorTemperatureLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTemperatureLightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorTemperatureLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
