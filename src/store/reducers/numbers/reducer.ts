import { createReducer } from '@reduxjs/toolkit';
import {
  generateFetchHandlers,
  generateResetHandlers,
  withFetch,
  withReset,
} from 'store/reducers/builder';
import { initial } from './initial';
import { reset, fetchNumbers, handlePayload } from './actions';

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
      handlePayload,
    }),
  });
});
