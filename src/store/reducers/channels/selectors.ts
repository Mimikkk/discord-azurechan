import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

export const selectTesting = (state: RootState) => state.Testing;

export const selectNumbers = createSelector(selectTesting, ({ numbers }) => ({
  numbers,
}));
