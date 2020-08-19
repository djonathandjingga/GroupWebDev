import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButterChickenPage } from './butter-chicken.page';

describe('ButterChickenPage', () => {
  let component: ButterChickenPage;
  let fixture: ComponentFixture<ButterChickenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterChickenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButterChickenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
