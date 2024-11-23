// Complex Example: Simulating API Calls and Data Transformations

/*
Imagine you have a stream of user IDs, and for each ID, 
you need to fetch the user's data, transform it,
 and output the results.
*/

import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { mergeMap, map, catchError, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-of-operator-example6',
  templateUrl: './of-operator-example6.component.html',
  styleUrls: ['./of-operator-example6.component.css'],
})
export class OfOperatorExample6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Simulated API call function
    const fetchUserData = (userId: number) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (userId === 3) {
            reject(`Failed to fetch user with ID ${userId}`); // Simulate an error for ID 3
          } else {
            resolve({ id: userId, name: `User${userId}`, age: 20 + userId });
          }
        }, 1000);
      });
    };

    // Observable of user IDs
    const userIds$ = of(1, 2, 3, 4, 5);

    userIds$
      .pipe(
        mergeMap((id) =>
          from(fetchUserData(id)).pipe(
            map((user: any) => ({
              ...user,
              ageCategory: user.age > 25 ? 'Senior' : 'Junior', // Add new field based on age
            })),
            catchError((error) => of({ id, error })) // Handle errors for specific users
          )
        ),
        toArray() // Collect all results into a single array
      )
      .subscribe({
        next: (users) => console.log('Transformed Users:', users),
        complete: () => console.log('Completed!'),
      });
  }
}
