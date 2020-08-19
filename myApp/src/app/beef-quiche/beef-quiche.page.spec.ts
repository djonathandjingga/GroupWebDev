import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeefQuichePage } from './beef-quiche.page';

describe('BeefQuichePage', () => {
  let component: BeefQuichePage;
  let fixture: ComponentFixture<BeefQuichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefQuichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeefQuichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
