import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJSComponent } from './view-js.component';

describe('ViewJSComponent', () => {
  let component: ViewJSComponent;
  let fixture: ComponentFixture<ViewJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
