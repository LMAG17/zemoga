import { setLoading } from '../../reducers/loading';
import { LoadingActionTypes, SetLoadingAction } from './LoadingActions';

export const setLoadingCreator = (payload: boolean): SetLoadingAction => ({
  type: LoadingActionTypes.getLoading,
  payload,
  reducer: setLoading,
});