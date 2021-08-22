import { createReducer } from '@reduxjs/toolkit';
import { ResponseStatus } from 'shared/types/common';
import {
  generateFetchHandlers,
  generateResetHandlers,
  withFetch,
  withReset,
} from 'store/reducers/builder';
import { StoreState } from 'store/reducers/types';
import { reset, fetchNumbers } from './actions';

const initial: StoreState<{ numbers: number[] }> = {
  numbers: [],
  error: null,
  status: ResponseStatus.Idle,
};

export const reducer = createReducer(initial, (builder) => {
  withReset({
    builder,
    reset,
    handlers: generateResetHandlers(initial),
  });
  withFetch({
    builder,
    fetch: fetchNumbers,
    handlers: generateFetchHandlers({
      empty: initial,
      handleSuccessful: (payload: number[]) => ({
        numbers: payload,
        error: null,
        status: ResponseStatus.Success,
      }),
    }),
  });
});
