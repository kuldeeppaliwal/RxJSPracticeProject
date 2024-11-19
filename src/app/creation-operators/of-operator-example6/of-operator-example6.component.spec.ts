import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOperatorExample6Component } from './of-operator-example6.component';

describe('OfOperatorExample6Component', () => {
  let component: OfOperatorExample6Component;
  let fixture: ComponentFixture<OfOperatorExample6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfOperatorExample6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOperatorExample6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
