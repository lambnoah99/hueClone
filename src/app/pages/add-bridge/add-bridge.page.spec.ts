import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBridgePage } from './add-bridge.page';

describe('AddBridgePage', () => {
  let component: AddBridgePage;
  let fixture: ComponentFixture<AddBridgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBridgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBridgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
