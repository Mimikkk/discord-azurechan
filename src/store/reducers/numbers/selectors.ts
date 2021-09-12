import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

const selectStore = (state: RootState) => state.numbers;

export const selectNumbers = createSelector(selectStore, (state) => state);
