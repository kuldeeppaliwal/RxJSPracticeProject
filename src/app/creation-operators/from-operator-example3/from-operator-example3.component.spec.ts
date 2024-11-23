import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample3Component } from './from-operator-example3.component';

describe('FromOperatorExample3Component', () => {
  let component: FromOperatorExample3Component;
  let fixture: ComponentFixture<FromOperatorExample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
