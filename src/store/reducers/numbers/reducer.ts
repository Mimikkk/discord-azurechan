import { createReducer } from '@reduxjs/toolkit';
import {
  generateFetchHandlers,
  generateResetHandlers,
  withFetch,
  withReset,
} from 'store/reducers/builder';
import { handleInitial } from 'store/reducers/handlers';
import { NumbersState } from 'store/reducers/numbers/types';
import { fetchNumbers, handlePayload, resetNumbers } from './actions';
import { initial } from './initial';

export const reducer = createReducer<NumbersState>(
  handleInitial(initial),
  (builder) => {
    withReset({
      builder,
      reset: resetNumbers,
      handlers: generateResetHandlers(initial),
    });
    withFetch({
      builder,
      fetch: fetchNumbers,
      handlers: generateFetchHandlers({
        initial,
        handlePayload,
      }),
    });
  },
);
