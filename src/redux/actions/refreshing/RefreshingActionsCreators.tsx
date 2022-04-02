import { setRefreshing } from '../../reducers/refreshing';
import { RefreshingActionTypes, SetRefreshingAction } from './RefreshingActions';

export const setRefreshingCreator = (payload: boolean): SetRefreshingAction => ({
  type: RefreshingActionTypes.getRefreshing,
  payload,
  reducer: setRefreshing,
});