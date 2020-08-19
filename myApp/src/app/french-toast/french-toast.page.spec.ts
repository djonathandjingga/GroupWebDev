import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrenchToastPage } from './french-toast.page';

describe('FrenchToastPage', () => {
  let component: FrenchToastPage;
  let fixture: ComponentFixture<FrenchToastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchToastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrenchToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
