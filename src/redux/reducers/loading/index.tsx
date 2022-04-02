import produce from 'immer';
import { AppState } from '../../store/types';

export function setLoading(state: AppState, payload: boolean): AppState {
  return produce(state, (draft) => {
    draft.loading = payload;
  });
}