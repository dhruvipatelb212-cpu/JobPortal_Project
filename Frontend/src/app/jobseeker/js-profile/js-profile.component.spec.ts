import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsProfileComponent } from './js-profile.component';

describe('JsProfileComponent', () => {
  let component: JsProfileComponent;
  let fixture: ComponentFixture<JsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
