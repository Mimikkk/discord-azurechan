import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseStatus } from 'shared/types/common';
import { createReset } from 'store/reducers/builder';
import { NumbersState } from 'store/reducers/numbers/types';
import { AsyncThunkConfig } from 'store/types';

export const handlePayload = (payload: number[]): NumbersState => ({
  numbers: payload,
  error: null,
  status: ResponseStatus.Success,
});

export const reset = createReset('numbers');

export const fetchNumbers = createAsyncThunk<
  number[],
  number,
  AsyncThunkConfig
>('@numbers/fetch', async (count, { extra }) =>
  extra.NumbersService.fetchNumbers(count),
);
