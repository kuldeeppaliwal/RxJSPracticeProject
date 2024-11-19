import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOperatorExample2Component } from './of-operator-example2.component';

describe('OfOperatorExample2Component', () => {
  let component: OfOperatorExample2Component;
  let fixture: ComponentFixture<OfOperatorExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfOperatorExample2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOperatorExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
