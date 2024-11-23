// Example 3: Use map to Transform Emissions

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-interval-operator-example3',
  templateUrl: './interval-operator-example3.component.html',
  styleUrls: ['./interval-operator-example3.component.css'],
})
export class IntervalOperatorExample3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const interval$ = interval(1000).pipe(
      map((value) => `Seconds elapsed: ${value}`) // Transform the emitted value
    );

    interval$.subscribe(console.log);

    // Output (every second):
    // Seconds elapsed: 0
    // Seconds elapsed: 1
    // Seconds elapsed: 2
    // ...
  }
}
