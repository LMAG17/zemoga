import { Action } from 'redux';

export interface ActionBuilder<T, P, S> extends Action {
    type: T;
    payload: P;
    reducer: (state: S, payload: P) => S;
}

export interface PayloadId {
    id: number;
}