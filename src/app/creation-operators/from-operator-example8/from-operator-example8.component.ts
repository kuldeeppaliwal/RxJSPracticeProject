// Handling Multiple Promises

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-from-operator-example8',
  templateUrl: './from-operator-example8.component.html',
  styleUrls: ['./from-operator-example8.component.css'],
})
export class FromOperatorExample8Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const promises = [
      Promise.resolve('First'),
      Promise.resolve('Second'),
      Promise.resolve('Third'),
    ];

    from(promises)
      .pipe(map((p) => p)) // Map over promises
      .subscribe({
        next: (value) => value.then(console.log), // Resolve and log each promise
        complete: () => console.log('Completed!'),
      });

    // Output:
    // First
    // Second
    // Third
    // Completed!
  }
}
