import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTimesComponent } from './prime-times.component';

describe('PrimeTimesComponent', () => {
  let component: PrimeTimesComponent;
  let fixture: ComponentFixture<PrimeTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeTimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
