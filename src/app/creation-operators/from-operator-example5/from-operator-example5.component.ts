// Using from with Async Generators

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator-example5',
  templateUrl: './from-operator-example5.component.html',
  styleUrls: ['./from-operator-example5.component.css'],
})
export class FromOperatorExample5Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    async function* asyncGenerator() {
      yield 'Hello';
      yield 'Async';
      yield 'World';
    }

    const asynciterable$ = from(asyncGenerator());

    asynciterable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed'),
    });

    // Output:
    // Hello
    // Async
    // World
    // Completed!
  }
}
