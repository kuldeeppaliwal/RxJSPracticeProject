//Convert a Set or Map to an Observable

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator-example4',
  templateUrl: './from-operator-example4.component.html',
  styleUrls: ['./from-operator-example4.component.css'],
})
export class FromOperatorExample4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Example: Using a Set

    const myset = new Set([1, 2, 3, 4, 5]);
    const set$ = from(myset);
    set$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed !'),
    });

    // Output:
    // 1
    // 2
    // 3
    // 4
    // Completed!

    //Example: Using a Map

    const mymap = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);

    const map$ = from(mymap);

    map$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed !'),
    });

    // Output:
    // ['a', 1]
    // ['b', 2]
    // ['c', 3]
    // Completed!
  }
}
