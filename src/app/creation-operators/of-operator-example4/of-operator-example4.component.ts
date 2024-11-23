// Emit an Array as a Single Value

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator-example4',
  templateUrl: './of-operator-example4.component.html',
  styleUrls: ['./of-operator-example4.component.css'],
})
export class OfOperatorExample4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const array$ = of([1, 2, 3, 4]);

    array$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed!'),
    });

    // Output:
    // [1, 2, 3, 4]
    // Completed!
  }
}
