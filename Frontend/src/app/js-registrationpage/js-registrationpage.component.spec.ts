import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsRegistrationpageComponent } from './js-registrationpage.component';

describe('JsRegistrationpageComponent', () => {
  let component: JsRegistrationpageComponent;
  let fixture: ComponentFixture<JsRegistrationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsRegistrationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsRegistrationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
