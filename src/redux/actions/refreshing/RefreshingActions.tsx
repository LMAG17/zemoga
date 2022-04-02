import { AppState } from '../../store/types';
import { ActionBuilder } from '../ActionBuilder';

export enum RefreshingActionTypes {
  getRefreshing = 'GET_REFRESHING',
}

export type SetRefreshingAction = ActionBuilder<
  RefreshingActionTypes.getRefreshing,
  boolean,
  AppState
>;

export type RefreshingActions = SetRefreshingAction;