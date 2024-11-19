import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOperatorExample3Component } from './of-operator-example3.component';

describe('OfOperatorExample3Component', () => {
  let component: OfOperatorExample3Component;
  let fixture: ComponentFixture<OfOperatorExample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfOperatorExample3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOperatorExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
