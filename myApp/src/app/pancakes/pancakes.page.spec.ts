import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PancakesPage } from './pancakes.page';

describe('PancakesPage', () => {
  let component: PancakesPage;
  let fixture: ComponentFixture<PancakesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PancakesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PancakesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
