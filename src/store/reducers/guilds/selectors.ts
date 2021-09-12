import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

const selectStore = (state: RootState) => state.guilds;

export const selectGuilds = createSelector(selectStore, (state) => state);

export const selectInfo = createSelector(selectStore, ({ status, error }) => ({
  status,
  error,
}));
