import { createAsyncThunk } from '@reduxjs/toolkit';
import { createReset } from 'store/reducers/builder';
import { AsyncThunkConfig } from 'store/types';

export const reset = createReset('numbers');

export const fetchNumbers = createAsyncThunk<
  number[],
  number,
  AsyncThunkConfig
>('@numbers/fetch', async (count, { extra }) =>
  extra.TestingService.fetchNumbers(count),
);
