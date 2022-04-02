import { AppState } from '../../store/types';
import { ActionBuilder } from '../ActionBuilder';

export enum LoadingActionTypes {
  getLoading = 'GET_LOADING',
}

export type SetLoadingAction = ActionBuilder<
  LoadingActionTypes.getLoading,
  boolean,
  AppState
>;

export type LoadingActions = SetLoadingAction;