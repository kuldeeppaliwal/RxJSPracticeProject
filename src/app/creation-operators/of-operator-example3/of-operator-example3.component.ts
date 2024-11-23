// Emit Objects

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator-example3',
  templateUrl: './of-operator-example3.component.html',
  styleUrls: ['./of-operator-example3.component.css'],
})
export class OfOperatorExample3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const user$ = of({ name: 'John', age: 30 }, { name: 'Jane', age: 25 });

    user$.subscribe({
      next: (user) => console.log('User:', user),
      complete: () => console.log('Completed!'),
    });

    // Output:
    // User: { name: 'John', age: 30 }
    // User: { name: 'Jane', age: 25 }
    // Completed!
  }
}
