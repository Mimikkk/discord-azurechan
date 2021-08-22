import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

const selectStore = (state: RootState) => state.Testing;

export const selectNumbers = createSelector(
  selectStore,
  ({ numbers }) => numbers,
);
