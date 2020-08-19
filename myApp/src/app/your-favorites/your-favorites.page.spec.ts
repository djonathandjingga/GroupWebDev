import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourFavoritesPage } from './your-favorites.page';

describe('YourFavoritesPage', () => {
  let component: YourFavoritesPage;
  let fixture: ComponentFixture<YourFavoritesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFavoritesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
