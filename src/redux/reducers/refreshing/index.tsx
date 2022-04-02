import produce from 'immer';
import { AppState } from '../../store/types';

export function setRefreshing(state: AppState, payload: boolean): AppState {
  return produce(state, (draft) => {
    draft.refreshing = payload;
  });
}