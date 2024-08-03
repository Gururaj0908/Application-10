import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColiveComponent } from './colive.component';

describe('ColiveComponent', () => {
  let component: ColiveComponent;
  let fixture: ComponentFixture<ColiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
