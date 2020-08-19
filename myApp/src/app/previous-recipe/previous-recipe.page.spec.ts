import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviousRecipePage } from './previous-recipe.page';

describe('PreviousRecipePage', () => {
  let component: PreviousRecipePage;
  let fixture: ComponentFixture<PreviousRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousRecipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviousRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
