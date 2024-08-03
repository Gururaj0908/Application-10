import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkComponent } from './cowork.component';

describe('CoworkComponent', () => {
  let component: CoworkComponent;
  let fixture: ComponentFixture<CoworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
