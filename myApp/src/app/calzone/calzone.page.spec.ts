import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalzonePage } from './calzone.page';

describe('CalzonePage', () => {
  let component: CalzonePage;
  let fixture: ComponentFixture<CalzonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalzonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalzonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
