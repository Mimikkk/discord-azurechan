import { Draft } from '@reduxjs/toolkit';
import { ResponseStatus } from 'shared/types/common';
import { StoreState } from 'store/reducers/types';
import { FetchBuilderProps, FetchGeneratorProps, FetchHandlers } from './types';

export const generateFetchHandlers = <State extends object, Payload>({
  initial,
  handlePayload,
}: FetchGeneratorProps<State, Payload>): FetchHandlers<State, Payload> => ({
  handlePending: (): StoreState<State> => ({
    ...initial,
    error: null,
    status: ResponseStatus.Loading,
  }),
  handleRejected: (): StoreState<State> => ({
    ...initial,
    status: ResponseStatus.Failed,
    error: { message: 'Failed to fetch the store data', name: 'FailedFetch' },
  }),
  handleFulfilled: (
    _: Draft<StoreState<State>>,
    action: any,
  ): StoreState<State> => {
    return {
      ...handlePayload(action.payload),
      error: null,
      status: ResponseStatus.Success,
    };
  },
});

export const withFetch = <State extends object, Payload, Props>({
  builder,
  fetch: { fulfilled, pending, rejected },
  handlers: { handlePending, handleRejected, handleFulfilled },
}: FetchBuilderProps<State, Payload, Props>) => {
  builder
    .addCase(pending, handlePending)
    .addCase(rejected, handleRejected)
    .addCase(fulfilled, handleFulfilled);
};
