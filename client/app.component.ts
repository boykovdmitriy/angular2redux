/**
 * Created by Boikov on 3/14/2017.
 */
import {
	Component
} from '@angular/core';
import { CounterActions } from "./actions/counter.action";
import { IAppState } from "./store";
import {
	NgRedux,
	select
} from "@angular-redux/store";
import { Observable } from "rxjs";

@Component({
	           selector: 'body',
	           template: `
				<div>
  Count: {{ count$|async }}
  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
</div>
				`,
           })
export class AppComponent {
	@select('count') readonly count$: Observable<number>;

	constructor(private ngRedux: NgRedux<IAppState>,
	            private actions: CounterActions) {
	}

	increment() {
		this.ngRedux.dispatch(this.actions.increment());
	}

	decrement() {
		this.ngRedux.dispatch(this.actions.decrement());
	}
}