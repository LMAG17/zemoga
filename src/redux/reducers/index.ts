import { ActionBuilder } from '../actions/ActionBuilder';
import { initialState, AppState } from '../store/types';

export const reducer = (
    state: AppState = initialState,
    action: ActionBuilder<String, any, AppState>,
): AppState => (action.reducer ? action.reducer(state, action.payload) : state);
