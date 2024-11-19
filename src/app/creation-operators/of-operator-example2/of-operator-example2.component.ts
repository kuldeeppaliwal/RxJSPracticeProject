import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-of-operator-example2',
  templateUrl: './of-operator-example2.component.html',
  styleUrls: ['./of-operator-example2.component.css'],
})
export class OfOperatorExample2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const greetings$ = of('Hello', 'RxJS', 'World!');
    
    greetings$.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Completed!')
    });
  }
}
