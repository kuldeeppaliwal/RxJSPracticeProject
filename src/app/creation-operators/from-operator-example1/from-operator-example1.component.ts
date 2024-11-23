 // Convert a Promise to an Observable
 
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator-example1',
  templateUrl: './from-operator-example1.component.html',
  styleUrls: ['./from-operator-example1.component.css'],
})
export class FromOperatorExample1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const numbers = [20, 30, 40, 50];
    const numbers$ = from(numbers);

    numbers$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('completed'),
    });

    // Output:
    // 10
    // 20
    // 30
    // Completed!
  }
}
