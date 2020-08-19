import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PumpkinPiePage } from './pumpkin-pie.page';

describe('PumpkinPiePage', () => {
  let component: PumpkinPiePage;
  let fixture: ComponentFixture<PumpkinPiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumpkinPiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PumpkinPiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
