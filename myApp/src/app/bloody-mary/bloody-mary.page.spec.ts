import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodyMaryPage } from './bloody-mary.page';

describe('BloodyMaryPage', () => {
  let component: BloodyMaryPage;
  let fixture: ComponentFixture<BloodyMaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodyMaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodyMaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
