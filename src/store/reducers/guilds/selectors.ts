import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

const selectStore = (state: RootState) => state.Guilds;

export const selectGuilds = createSelector(
  selectStore,
  ({ list, mapBySnowflake, snowflakes }) => ({
    list,
    mapBySnowflake,
    snowflakes,
  }),
);

export const selectInfo = createSelector(selectStore, ({ status, error }) => ({
  status,
  error,
}));
