import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NegroniPage } from './negroni.page';

describe('NegroniPage', () => {
  let component: NegroniPage;
  let fixture: ComponentFixture<NegroniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegroniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NegroniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
