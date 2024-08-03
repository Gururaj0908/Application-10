import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEditionComponent } from './latest-edition.component';

describe('LatestEditionComponent', () => {
  let component: LatestEditionComponent;
  let fixture: ComponentFixture<LatestEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestEditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
