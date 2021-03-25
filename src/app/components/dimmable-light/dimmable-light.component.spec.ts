import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DimmableLightComponent } from './dimmable-light.component';

describe('DimmableLightComponent', () => {
  let component: DimmableLightComponent;
  let fixture: ComponentFixture<DimmableLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimmableLightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DimmableLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
