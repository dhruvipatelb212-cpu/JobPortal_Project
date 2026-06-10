import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobseekerComponent } from './view-jobseeker.component';

describe('ViewJobseekerComponent', () => {
  let component: ViewJobseekerComponent;
  let fixture: ComponentFixture<ViewJobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
