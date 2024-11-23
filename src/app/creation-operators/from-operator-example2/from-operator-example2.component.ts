// Convert a Promise to an Observable

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator-example2',
  templateUrl: './from-operator-example2.component.html',
  styleUrls: ['./from-operator-example2.component.css'],
})
export class FromOperatorExample2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received');
      }, 2000);
    });

    const promise$ = from(fetchData);

    promise$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('completed!'),
    });
    
    // Output after 2 seconds:
    // Data received!
    // Completed!
  }
}
