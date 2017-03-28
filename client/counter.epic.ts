import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CounterActions } from "./actions/counter.action";

@Injectable()
export class CounterEpics {
	constructor(private http: Http) {}

	counter = (action$: ActionsObservable<any>) => {
		return action$.ofType(CounterActions.FETCH)
		              .mergeMap(() => {
			              return this.http.get(`/api/counter`)
			                         .map(result => ({
				                         type   : CounterActions.FETCH_SUCCESS,
				                         payload: result.json().data
			                         }))
		              });
	}
}