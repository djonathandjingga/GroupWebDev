import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplitPeaSoupPage } from './split-pea-soup.page';

describe('SplitPeaSoupPage', () => {
  let component: SplitPeaSoupPage;
  let fixture: ComponentFixture<SplitPeaSoupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitPeaSoupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SplitPeaSoupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
