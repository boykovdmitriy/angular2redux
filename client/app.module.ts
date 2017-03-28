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

@NgModule({
	          imports     : [BrowserModule, NgReduxModule],
	          declarations: [AppComponent],
	          bootstrap   : [AppComponent],
	          providers   : [CounterActions]
          })
export class AppModule {
	constructor(ngRedux: NgRedux<IAppState>) {
		ngRedux.configureStore(
			rootReducer,
			INITIAL_STATE);
	}
}