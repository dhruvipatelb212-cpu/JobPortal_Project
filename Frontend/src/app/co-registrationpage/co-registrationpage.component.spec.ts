import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegistrationpageComponent } from './co-registrationpage.component';

describe('CoRegistrationpageComponent', () => {
  let component: CoRegistrationpageComponent;
  let fixture: ComponentFixture<CoRegistrationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoRegistrationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegistrationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
