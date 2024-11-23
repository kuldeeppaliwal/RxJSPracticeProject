//Example 4: Polling an API Every 5 Seconds

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-interval-operator-example4',
  templateUrl: './interval-operator-example4.component.html',
  styleUrls: ['./interval-operator-example4.component.css']
})
export class IntervalOperatorExample4Component implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    interval(5000) // Emit every 5 seconds
      .pipe(
        switchMap(() => this.http.get('https://api.example.com/data')) // Make API call
      )
      .subscribe(response => console.log('API Response:', response));
  }

}
