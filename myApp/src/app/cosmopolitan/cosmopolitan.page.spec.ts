import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CosmopolitanPage } from './cosmopolitan.page';

describe('CosmopolitanPage', () => {
  let component: CosmopolitanPage;
  let fixture: ComponentFixture<CosmopolitanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmopolitanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CosmopolitanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
