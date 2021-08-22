import { createReducer } from '@reduxjs/toolkit';
import {
  getFailed,
  getIdle,
  getLoading,
  createSuccessful,
} from 'store/reducers/testing/states';

import { fetchNumbers, resetNumbers } from 'store/reducers/testing/actions';

export const reducer = createReducer(getIdle(), (builder) => {
  builder
    .addCase(resetNumbers, getIdle)
    .addCase(fetchNumbers.pending, getLoading)
    .addCase(fetchNumbers.rejected, getFailed)
    .addCase(fetchNumbers.fulfilled, (_, action) =>
      createSuccessful(action.payload),
    );
});
