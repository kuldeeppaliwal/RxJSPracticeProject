// Example 2: Take Only the First 5 Emissions

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-interval-operator-example2',
  templateUrl: './interval-operator-example2.component.html',
  styleUrls: ['./interval-operator-example2.component.css'],
})
export class IntervalOperatorExample2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const interval$ = interval(1000).pipe(take(5)); // Take only the first 5 values

    interval$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed!'),
    });

    // Output:
    // 0
    // 1
    // 2
    // 3
    // 4
    // Completed!
  }
}
