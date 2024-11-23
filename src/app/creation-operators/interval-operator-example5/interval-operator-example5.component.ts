// Example 5: Combine interval with timer for Delayed Start

import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-operator-example5',
  templateUrl: './interval-operator-example5.component.html',
  styleUrls: ['./interval-operator-example5.component.css'],
})
export class IntervalOperatorExample5Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const delayedInterval$ = timer(2000, 1000); // Start after 2 seconds, then emit every 1 second

    delayedInterval$.subscribe((value) => console.log(value));

    // Output (after 2 seconds):
    // 0
    // 1
    // 2
    // ...
  }
}
