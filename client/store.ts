/**
 * Created by Boikov on 3/14/2017.
 */
import { CounterActions } from "./actions/counter.action";

export interface IAppState {
	count: number;
}

export const INITIAL_STATE: IAppState = {
	count: 0,
};

export function rootReducer(lastState: IAppState, action: any): IAppState {
	console.log(action);
	switch (action.type) {
		case CounterActions.INCREMENT:
			return { count: lastState.count + 1 };
		case CounterActions.DECREMENT:
			return { count: lastState.count - 1 };
		case CounterActions.FETCH_SUCCESS:
			return { count: action.payload };
	}

	// We don't care about any other actions right now.
	return lastState;
}