import { Dispatch } from 'react';
import { setLoadingCreator } from '../../actions/loading/LoadingActionsCreators';

export function setLoading(loading: boolean) {
  return function (dispatch: Dispatch<any>) {
    dispatch(
      setLoadingCreator(loading),
    );
  };
}