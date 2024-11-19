# 1. Creation Operators

Used to create Observables.

	• of: Creates an Observable from a set of values.
	• from: Converts an array, promise, or iterable into an Observable.
	• fromEvent: Creates an Observable from DOM events.
	• interval: Emits values at specified intervals.
	• timer: Emits a value after a delay and optionally emits subsequent values periodically.
	• range: Emits a sequence of numbers in a range.
	• throwError: Emits an error notification.
	• empty / EMPTY: Emits no items and immediately completes.
	• never: Emits no items and never completes.
	• defer: Creates an Observable dynamically upon subscription.

# 2. Transformation Operators

Modify or transform data emitted by the source Observable.

	• map: Applies a function to each value emitted by the source Observable.
	• mapTo: Maps every emission to the same constant value.
	• scan: Accumulates values over time, similar to reduce.
	• switchMap: Switches to a new inner Observable and cancels previous ones.
	• mergeMap (or flatMap): Maps each value to an Observable, merging their emissions.
	• concatMap: Maps each value to an Observable, concatenating emissions in order.
	• exhaustMap: Ignores new Observables until the current one completes.

# 3. Filtering Operators

Emit only specific items from the source Observable.

	• filter: Emits values that pass a predicate function.
	• take: Emits only the first n values.
	• takeWhile: Emits values while a condition is true.
	• takeUntil: Emits values until another Observable emits.
	• first: Emits only the first value (optionally meeting a condition).
	• last: Emits only the last value (optionally meeting a condition).
	• skip: Skips the first n values.
	• distinct: Emits distinct values only.
	• distinctUntilChanged: Emits values only if they change.

# 4. Combination Operators

Combine multiple Observables into one.

	• merge: Merges multiple Observables into one, emitting values concurrently.
	• concat: Concatenates multiple Observables, emitting values sequentially.
	• combineLatest: Combines the latest values of multiple Observables.
	• forkJoin: Waits for all Observables to complete and emits their final values as an array.
	• zip: Combines values from multiple Observables based on their indices.
	• startWith: Emits a specified initial value before emitting other values.
	• withLatestFrom: Combines the source Observable with the latest value from another Observable.

# 5. Error Handling Operators

Handle errors in Observables.

	• catchError: Catches errors and returns a fallback Observable.
	• retry: Retries the source Observable upon an error, for a specified number of times.
	• retryWhen: Retries the Observable based on a custom logic (e.g., delay between retries).
	• throwError: Emits an error to the subscriber.

# 6. Utility Operators

Perform general-purpose operations on Observables.

	• tap (formerly do): Executes a side effect for each value without modifying the stream.
	• delay: Delays the emission of items.
	• timeout: Emits an error if a specified timeout is exceeded.
	• finalize: Executes a callback when the Observable completes or errors.
	• toPromise: Converts an Observable to a Promise.
	• observeOn: Specifies the Scheduler for the observer.
	• subscribeOn: Specifies the Scheduler for the source Observable.

# 7. Multicasting Operators

Share a single subscription among multiple subscribers.

	• share: Shares a subscription between multiple subscribers.
	• shareReplay: Shares a subscription and replays specified number of previous values to new subscribers.
	• publish: Converts a cold Observable into a hot one.
	• refCount: Automatically connects/disconnects multicasted Observables.

# 8. Conditional and Boolean Operators

Emit items based on conditions.

	• defaultIfEmpty: Emits a default value if the source Observable completes without emitting.
	• every: Emits true if all items match a predicate.
	• find: Emits the first value matching a predicate.
	• findIndex: Emits the index of the first value matching a predicate.

# 9. Mathematical and Aggregate Operators

Perform mathematical operations on emitted values.

	• count: Emits the total number of items.
	• reduce: Applies an accumulator function and emits the final result.
	• max: Emits the maximum value.
	• min: Emits the minimum value.
