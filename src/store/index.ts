import { RootState } from 'store/types';
import { store } from './store';

export const useDispatch = store.dispatch;
export const useSelect = <T>(fn: (state: RootState) => T): T =>
  fn(store.getState());
