import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample1Component } from './from-operator-example1.component';

describe('FromOperatorExample1Component', () => {
  let component: FromOperatorExample1Component;
  let fixture: ComponentFixture<FromOperatorExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
