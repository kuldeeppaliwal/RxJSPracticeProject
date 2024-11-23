import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample6Component } from './from-operator-example6.component';

describe('FromOperatorExample6Component', () => {
  let component: FromOperatorExample6Component;
  let fixture: ComponentFixture<FromOperatorExample6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
