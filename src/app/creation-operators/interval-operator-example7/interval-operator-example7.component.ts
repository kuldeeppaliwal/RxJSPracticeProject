// Example 7: Animate a Progress Bar

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-interval-operator-example7',
  templateUrl: './interval-operator-example7.component.html',
  styleUrls: ['./interval-operator-example7.component.css'],
})
export class IntervalOperatorExample7Component implements OnInit {
  constructor() {}

  progress = 0;

  ngOnInit() {
    interval(100)
      .pipe(take(101))
      .subscribe((value) => {
        this.progress = value; // Update progress percentage
      });
  }
}
