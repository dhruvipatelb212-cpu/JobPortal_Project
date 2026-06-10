import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoFeedbackComponent } from './co-feedback.component';

describe('CoFeedbackComponent', () => {
  let component: CoFeedbackComponent;
  let fixture: ComponentFixture<CoFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
