//Scenario: Fetch User Details for Multiple User IDs

/*
Here's a complex example of the from operator in an Angular RxJS-based application,
demonstrating how it can be used with an HTTP service, observables, and data transformations.
This example simulates a scenario where you need to fetch a list of user IDs, 
make multiple HTTP requests to get user details, transform the data, and handle potential errors.
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, of } from 'rxjs';
import { mergeMap, map, catchError, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-from-operator-example7',
  templateUrl: './from-operator-example7.component.html',
  styleUrls: ['./from-operator-example7.component.css'],
})
export class FromOperatorExample7Component implements OnInit {
  users: any[] = []; // To store the final user data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const userIds = [1, 2, 3, 4, 5]; // Simulated list of user IDs

    from(userIds)
      .pipe(
        mergeMap(userId =>
          this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
            map(user => ({
              id: user.id,
              name: user.name,
              email: user.email,
              ageCategory: user.id % 2 === 0 ? 'Adult' : 'Young', // Add ageCategory dynamically
            })),
            catchError(() =>
              of({
                id: userId,
                error: `Failed to fetch user with ID ${userId}`,
              })
            )
          )
        ),
        toArray() // Combine all emitted values into a single array
      )
      .subscribe({
        next: users => {
          this.users = users; // Assign final transformed data to the component property
          console.log('Users:', this.users);
        },
        error: err => console.error('Error occurred:', err),
        complete: () => console.log('Data fetch complete!'),
      });
  }
}
