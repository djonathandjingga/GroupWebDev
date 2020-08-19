import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChocolateSoufflePage } from './chocolate-souffle.page';

describe('ChocolateSoufflePage', () => {
  let component: ChocolateSoufflePage;
  let fixture: ComponentFixture<ChocolateSoufflePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolateSoufflePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChocolateSoufflePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
