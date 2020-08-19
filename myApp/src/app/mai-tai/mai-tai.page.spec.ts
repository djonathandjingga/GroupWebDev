import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaiTaiPage } from './mai-tai.page';

describe('MaiTaiPage', () => {
  let component: MaiTaiPage;
  let fixture: ComponentFixture<MaiTaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiTaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaiTaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
