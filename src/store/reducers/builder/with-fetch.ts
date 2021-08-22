import { Draft } from '@reduxjs/toolkit';
import { ResponseStatus } from 'shared/types/common';
import { StoreState } from 'store/reducers/types';
import { FetchBuilderProps, FetchGeneratorProps, FetchHandlers } from './types';

export const generateFetchHandlers = <State extends object, Payload>({
  empty,
  handlePayload,
}: FetchGeneratorProps<State, Payload>): FetchHandlers<State, Payload> => ({
  handlePending: (): StoreState<State> => ({
    ...empty,
    ...empty,
    status: ResponseStatus.Loading,
    error: null,
  }),
  handleRejected: (): StoreState<State> => ({
    ...empty,
    status: ResponseStatus.Failed,
    error: { message: 'Failed to fetch the store data', name: 'FailedFetch' },
  }),
  handleFulfilled: (
    _: Draft<StoreState<State>>,
    action: any,
  ): StoreState<State> => handlePayload(action.payload),
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
