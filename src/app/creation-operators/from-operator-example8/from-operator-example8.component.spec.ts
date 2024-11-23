import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample8Component } from './from-operator-example8.component';

describe('FromOperatorExample8Component', () => {
  let component: FromOperatorExample8Component;
  let fixture: ComponentFixture<FromOperatorExample8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
