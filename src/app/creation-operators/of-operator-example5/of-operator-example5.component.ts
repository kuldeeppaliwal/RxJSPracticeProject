import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-of-operator-example5',
  templateUrl: './of-operator-example5.component.html',
  styleUrls: ['./of-operator-example5.component.css'],
})
export class OfOperatorExample5Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const numbers$ = of(1, 2, 3, 4, 5);

    numbers$
      .pipe(
        filter((value) => value % 2 === 0), // Keep only even numbers
        map((value) => value * 10) // Multiply each by 10
      )
      .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('Completed!'),
      });
  }
}
