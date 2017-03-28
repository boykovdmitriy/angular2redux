/**
 * Created by Boikov on 3/14/2017.
 */
import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CounterActions {
	static INCREMENT = 'INCREMENT';
	static DECREMENT = 'DECREMENT';
	static FETCH = 'FETCH';
	static FETCH_SUCCESS = 'FETCH_SUCCESS';

	increment(): any {
		return { type: CounterActions.INCREMENT };
	}

	decrement(): any {
		return { type: CounterActions.DECREMENT };
	}

	fetch(): any {
		return { type: CounterActions.FETCH };
	}

	fetchSuccess(payload: number): any {
		return {
			type   : CounterActions.FETCH_SUCCESS,
			payload: payload
		};
	}
}