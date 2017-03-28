/**
 * Created by Boikov on 3/14/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {
	NgReduxModule,
	NgRedux
} from '@angular-redux/store';
import {
	INITIAL_STATE,
	rootReducer,
	IAppState
} from "./store";
import { CounterActions } from "./actions/counter.action";
import { CounterEpics } from "./counter.epic";
import { createEpicMiddleware } from "redux-observable";
import { HttpModule } from "@angular/http";

@NgModule({
	          imports     : [BrowserModule, NgReduxModule, HttpModule],
	          declarations: [AppComponent],
	          bootstrap   : [AppComponent],
	          providers   : [CounterActions, CounterEpics]
          })
export class AppModule {
	constructor(ngRedux: NgRedux<IAppState>, counterEpics: CounterEpics) {
		ngRedux.configureStore(
			rootReducer,
			INITIAL_STATE,
			[createEpicMiddleware(counterEpics.counter)]);
	}
}