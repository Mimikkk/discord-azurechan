import { createReducer } from '@reduxjs/toolkit';
import {
  generateFetchHandlers,
  generateResetHandlers,
  withFetch,
  withReset,
  handleInitial,
} from 'store/reducers/builder';
import { GuildsState } from './types';
import { handlePayload } from './handlers';
import { initial } from './initial';
import { fetchGuilds, resetGuilds } from './actions';

export const reducer = createReducer<GuildsState>(
  handleInitial(initial),
  (builder) => {
    withReset({
      builder,
      reset: resetGuilds,
      handlers: generateResetHandlers(initial),
    });
    withFetch({
      builder,
      fetch: fetchGuilds,
      handlers: generateFetchHandlers({
        initial: initial,
        handlePayload,
      }),
    });
  },
);
