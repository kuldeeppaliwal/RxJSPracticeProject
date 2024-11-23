//Convert a String to an Observable (Iterables)

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator-example3',
  templateUrl: './from-operator-example3.component.html',
  styleUrls: ['./from-operator-example3.component.css'],
})
export class FromOperatorExample3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const text = 'RxJS';
    const string$ = from(text);

    string$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed!'),
    });
    
    // Output:
    // R
    // x
    // J
    // S
    // Completed!
  }
}
