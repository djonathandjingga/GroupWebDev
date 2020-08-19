import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JamaicanJerkChickenPage } from './jamaican-jerk-chicken.page';

describe('JamaicanJerkChickenPage', () => {
  let component: JamaicanJerkChickenPage;
  let fixture: ComponentFixture<JamaicanJerkChickenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamaicanJerkChickenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JamaicanJerkChickenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
