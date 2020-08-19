import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaipirinhaPage } from './caipirinha.page';

describe('CaipirinhaPage', () => {
  let component: CaipirinhaPage;
  let fixture: ComponentFixture<CaipirinhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaipirinhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaipirinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
