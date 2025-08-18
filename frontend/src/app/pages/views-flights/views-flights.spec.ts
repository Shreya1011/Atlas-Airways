import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsFlights } from './views-flights';

describe('ViewsFlights', () => {
  let component: ViewsFlights;
  let fixture: ComponentFixture<ViewsFlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsFlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsFlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
