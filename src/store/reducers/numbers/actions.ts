import { createAsyncThunk } from '@reduxjs/toolkit';
import { createReset } from 'store/reducers/builder';
import { NumbersData } from './types';
import { AsyncThunkConfig } from 'store/types';

export const handlePayload = (payload: number[]): NumbersData => ({
  numbers: payload,
});

export const resetNumbers = createReset('numbers');

export const fetchNumbers = createAsyncThunk<
  number[],
  number,
  AsyncThunkConfig
>('@numbers/fetch', async (count, { extra }) =>
  extra.NumbersService.fetchNumbers(count),
);
