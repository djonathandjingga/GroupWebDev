import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PommesAnnaPage } from './pommes-anna.page';

describe('PommesAnnaPage', () => {
  let component: PommesAnnaPage;
  let fixture: ComponentFixture<PommesAnnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PommesAnnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PommesAnnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
