import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'store/types';

export const resetNumbers = createAction('@testing/reset');

export const fetchNumbers = createAsyncThunk<
  number[],
  number,
  AsyncThunkConfig
>('@testing/fetchNumbers', async (count, { extra }) => {
  return extra.TestingService.fetchNumbers(count);
});
