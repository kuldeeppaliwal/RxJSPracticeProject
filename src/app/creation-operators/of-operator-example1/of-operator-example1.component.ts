// Emit Multiple Numbers

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-of-operator-example1',
  templateUrl: './of-operator-example1.component.html',
  styleUrls: ['./of-operator-example1.component.css'],
})
export class OfOperatorExample1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5);
    numbers$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed!'),
    });

    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5
    // Completed!
  }
}
