import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PannaCottaPage } from './panna-cotta.page';

describe('PannaCottaPage', () => {
  let component: PannaCottaPage;
  let fixture: ComponentFixture<PannaCottaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannaCottaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PannaCottaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
