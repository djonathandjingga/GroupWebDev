import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChocolateChipCookiePage } from './chocolate-chip-cookie.page';

describe('ChocolateChipCookiePage', () => {
  let component: ChocolateChipCookiePage;
  let fixture: ComponentFixture<ChocolateChipCookiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolateChipCookiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChocolateChipCookiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
