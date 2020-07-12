import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerminadosPage } from './terminados.page';

describe('TerminadosPage', () => {
  let component: TerminadosPage;
  let fixture: ComponentFixture<TerminadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerminadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
