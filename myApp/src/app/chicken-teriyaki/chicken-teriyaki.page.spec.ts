import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChickenTeriyakiPage } from './chicken-teriyaki.page';

describe('ChickenTeriyakiPage', () => {
  let component: ChickenTeriyakiPage;
  let fixture: ComponentFixture<ChickenTeriyakiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenTeriyakiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChickenTeriyakiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
