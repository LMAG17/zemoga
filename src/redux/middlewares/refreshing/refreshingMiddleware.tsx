import { Dispatch } from 'react';
import { setRefreshingCreator } from '../../actions/refreshing/RefreshingActionsCreators';

export function setRefreshing(refreshing: boolean) {
  return function (dispatch: Dispatch<any>) {
    dispatch(
      setRefreshingCreator(refreshing),
    );
  };
}