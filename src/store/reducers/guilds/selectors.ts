import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

const selectStore = (state: RootState) => state.Guilds;

export const selectGuilds = createSelector(
  selectStore,
  ({ guilds, collection, mapBySnowflake, snowflakes }) => ({
    guilds,
    collection,
    mapBySnowflake,
    snowflakes,
  }),
);

export const selectInfo = createSelector(selectStore, ({ status, error }) => ({
  status,
  error,
}));
