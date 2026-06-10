import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPassComponent } from './js-pass.component';

describe('JsPassComponent', () => {
  let component: JsPassComponent;
  let fixture: ComponentFixture<JsPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
