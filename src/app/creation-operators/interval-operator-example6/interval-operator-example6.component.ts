//Example 6: Emit Multiple Values Simultaneously with combineLatest

import { Component, OnInit } from '@angular/core';
import { interval, combineLatest } from 'rxjs';

@Component({
  selector: 'app-interval-operator-example6',
  templateUrl: './interval-operator-example6.component.html',
  styleUrls: ['./interval-operator-example6.component.css'],
})
export class IntervalOperatorExample6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const interval1$ = interval(1000); // Emit every 1 second
    const interval2$ = interval(2000); // Emit every 2 seconds

    combineLatest([interval1$, interval2$]).subscribe(([val1, val2]) => {
      console.log(`Interval1: ${val1}, Interval2: ${val2}`);
    });

    // Output:
    // Interval1: 1, Interval2: 0
    // Interval1: 2, Interval2: 0
    // Interval1: 3, Interval2: 1
    // ...
  }
}
