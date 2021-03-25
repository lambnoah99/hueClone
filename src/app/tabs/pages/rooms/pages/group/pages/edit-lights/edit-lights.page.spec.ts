import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditLightsPage } from './edit-lights.page';

describe('EditLightsPage', () => {
  let component: EditLightsPage;
  let fixture: ComponentFixture<EditLightsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLightsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
