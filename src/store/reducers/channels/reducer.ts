import { createReducer } from '@reduxjs/toolkit';
import { getFailed, getIdle, getLoading, createSuccessful } from './states';

// export const reducer = createReducer(getIdle(), (withs) => {
//   withs
//     .addCase(resetNumbers, getIdle)
//     .addCase(fetchNumbers.pending, getLoading)
//     .addCase(fetchNumbers.rejected, getFailed)
//     .addCase(fetchNumbers.fulfilled, (_, action) =>
//       createSuccessful(action.payload),
//     );
// });
