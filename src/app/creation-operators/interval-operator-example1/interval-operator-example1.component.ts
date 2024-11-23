// Example 1: Emit Values Every Second

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval-operator-example1',
  templateUrl: './interval-operator-example1.component.html',
  styleUrls: ['./interval-operator-example1.component.css'],
})
export class IntervalOperatorExample1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const interval$ = interval(1000); // Emits values every 1000ms (1 second)

    const subscription = interval$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed!'),
    });

    // Output (every second):
    // 0
    // 1
    // 2
  }
}
