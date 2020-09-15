import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, Reset } from '../reducer/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private store: Store<{count: number}>
  ) {
    this.count$ = store.pipe(select('count'));
   }

   increment() {
    this.store.dispatch(new Increment());
   }

   decrement() {
    this.store.dispatch(new Decrement());
   }

   reset() {
    this.store.dispatch(new Reset());
   }

  ngOnInit(): void {
  }

}
