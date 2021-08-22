import { services } from 'store/services';
import { store } from 'store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: typeof services;
};
