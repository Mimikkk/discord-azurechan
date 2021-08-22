import {
  Action,
  ActionCreatorWithoutPayload,
  ActionReducerMapBuilder,
  AsyncThunk,
  Draft,
} from '@reduxjs/toolkit';
import { StoreData, StoreState } from 'store/reducers/types';
import { AsyncThunkConfig } from 'store/types';

export type FetchHandlers<State extends object, Payload> = {
  handlePending: () => StoreState<State>;
  handleRejected: () => StoreState<State>;
  handleFulfilled: (
    _: Draft<StoreState<State>>,
    action: Action & { payload: Payload },
  ) => StoreState<State>;
};
export type FetchBuilderProps<State extends object, Props, Payload> = {
  builder: ActionReducerMapBuilder<State>;
  fetch: AsyncThunk<Payload, Props, AsyncThunkConfig>;
  handlers: FetchHandlers<State, Payload>;
};
export type FetchGeneratorProps<State extends object, Payload> = {
  empty: StoreData<State>;
  handleSuccessful: (payload: Payload) => StoreState<State>;
};

export type ResetHandlers<State extends object> = {
  handleReset: () => StoreState<State>;
};
export type ResetBuilderProps<State extends object> = {
  builder: ActionReducerMapBuilder<State>;
  reset: ActionCreatorWithoutPayload;
  handlers: ResetHandlers<State>;
};
