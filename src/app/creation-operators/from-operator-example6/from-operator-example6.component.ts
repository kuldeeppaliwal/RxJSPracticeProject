// Combining from with Operators

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-from-operator-example6',
  templateUrl: './from-operator-example6.component.html',
  styleUrls: ['./from-operator-example6.component.css'],
})
export class FromOperatorExample6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const number = [1, 2, 3, 4, 5, 6];
    from(number)
      .pipe(
        filter((num) => num % 2 === 0),
        map((num) => num * 10)
      )
      .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('Completed !'),
      });

    // Output:
    // 20
    // 40
    // Completed!
  }
}
