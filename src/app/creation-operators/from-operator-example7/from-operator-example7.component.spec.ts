import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample7Component } from './from-operator-example7.component';

describe('FromOperatorExample7Component', () => {
  let component: FromOperatorExample7Component;
  let fixture: ComponentFixture<FromOperatorExample7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
