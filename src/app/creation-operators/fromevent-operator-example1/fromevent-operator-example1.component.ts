// Scenario: Detect Button Clicks and Window Resizing

import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-fromevent-operator-example1',
  templateUrl: './fromevent-operator-example1.component.html',
  styleUrls: ['./fromevent-operator-example1.component.css']
})
export class FromeventOperatorExample1Component implements OnInit {

  @ViewChild('myButton', { static: true }) button!: ElementRef; // Reference to the button
  clickCount = 0;
  windowWidth = window.innerWidth;

  private subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    // Button Click Event
    const buttonClick$ = fromEvent(this.button.nativeElement, 'click');
    this.subscriptions.add(
      buttonClick$
        .pipe(
          map(() => ++this.clickCount) // Increment click count
        )
        .subscribe(() => console.log('Button clicked! Count:', this.clickCount))
    );

    // Window Resize Event
    const resize$ = fromEvent(window, 'resize');
    this.subscriptions.add(
      resize$
        .pipe(
          debounceTime(300), // Wait for 300ms after resizing stops
          map(() => window.innerWidth) // Get the updated window width
        )
        .subscribe(width => {
          this.windowWidth = width;
          console.log('Window resized! New width:', width);
        })
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.unsubscribe();
  }

}
