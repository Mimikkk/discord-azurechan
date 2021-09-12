import { createReducer } from '@reduxjs/toolkit';
import {
  generateFetchHandlers,
  generateResetHandlers,
  withFetch,
  withReset,
} from 'store/reducers/builder';
import { fetchGuilds, reset } from 'store/reducers/guilds/actions';
import { handlePayload } from 'store/reducers/numbers/actions';
// import { getFailed, getIdle, getLoading, createSuccessful } from './states';

// export const reducer = createReducer(getIdle(), (builder) => {
// withReset({
//   builder,
//   reset,
//   handlers: generateResetHandlers(initial),
// });
// withFetch({
//   builder,
//   fetch: fetchNumbers,
//   handlers: generateFetchHandlers({
//     initial: initial,
//     handlePayload,
//   }),
// });

// @ts-ignore
// builder
//   .addCase(reset, getIdle)
//   .addCase(fetchGuilds.pending, getLoading)
//   .addCase(fetchGuilds.rejected, getFailed)
//   .addCase(fetchGuilds.fulfilled, (_, action) =>
//     createSuccessful(action.payload),
//   );
// });
export {};
