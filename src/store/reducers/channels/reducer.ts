import { createReducer } from '@reduxjs/toolkit';
import { getFailed, getIdle, getLoading, createSuccessful } from './states';

import { fetchNumbers, resetNumbers } from './actions';

export const reducer = createReducer(getIdle(), (builder) => {
  builder
    .addCase(resetNumbers, getIdle)
    .addCase(fetchNumbers.pending, getLoading)
    .addCase(fetchNumbers.rejected, getFailed)
    .addCase(fetchNumbers.fulfilled, (_, action) =>
      createSuccessful(action.payload),
    );
});