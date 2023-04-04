import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState ,} from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  counterSubscription: Subscription | undefined;
  counter: number | undefined;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter)=>{console.log('counter Observable') ; this.counter=counter});
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
