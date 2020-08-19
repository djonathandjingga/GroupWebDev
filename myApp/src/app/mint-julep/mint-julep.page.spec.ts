import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MintJulepPage } from './mint-julep.page';

describe('MintJulepPage', () => {
  let component: MintJulepPage;
  let fixture: ComponentFixture<MintJulepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MintJulepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MintJulepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
