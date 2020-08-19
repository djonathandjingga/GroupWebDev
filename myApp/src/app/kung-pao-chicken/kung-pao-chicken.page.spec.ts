import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KungPaoChickenPage } from './kung-pao-chicken.page';

describe('KungPaoChickenPage', () => {
  let component: KungPaoChickenPage;
  let fixture: ComponentFixture<KungPaoChickenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KungPaoChickenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KungPaoChickenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
