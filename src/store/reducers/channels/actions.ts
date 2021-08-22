import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'store/types';

export const resetNumbers = createAction('@numbers/reset');

export const fetchNumbers = createAsyncThunk<
  number[],
  number,
  AsyncThunkConfig
>('@numbers/fetchNumbers', async (count, { extra }) => {
  return extra.TestingService.fetchNumbers(count);
});
