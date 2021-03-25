import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnOffLightComponent } from './on-off-light.component';

describe('OnOffLightComponent', () => {
  let component: OnOffLightComponent;
  let fixture: ComponentFixture<OnOffLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOffLightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnOffLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
