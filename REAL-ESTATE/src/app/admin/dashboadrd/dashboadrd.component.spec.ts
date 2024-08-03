import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadrdComponent } from './dashboadrd.component';

describe('DashboadrdComponent', () => {
  let component: DashboadrdComponent;
  let fixture: ComponentFixture<DashboadrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboadrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboadrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
