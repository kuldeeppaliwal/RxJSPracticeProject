import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample4Component } from './from-operator-example4.component';

describe('FromOperatorExample4Component', () => {
  let component: FromOperatorExample4Component;
  let fixture: ComponentFixture<FromOperatorExample4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
