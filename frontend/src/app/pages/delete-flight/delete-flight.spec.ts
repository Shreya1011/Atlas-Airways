import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFlight } from './delete-flight';

describe('DeleteFlight', () => {
  let component: DeleteFlight;
  let fixture: ComponentFixture<DeleteFlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFlight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
