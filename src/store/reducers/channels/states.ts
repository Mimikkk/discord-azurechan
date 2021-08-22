import { ResponseStatus } from 'shared/types/common';
import { State } from './types';

export const getIdle = (): State => ({
  status: ResponseStatus.Idle,
  numbers: [],
  total: 0,
  error: null,
});
export const getLoading = (): State => ({
  status: ResponseStatus.Loading,
  numbers: [],
  total: 0,
  error: null,
});
export const getFailed = (): State => ({
  status: ResponseStatus.Failed,
  numbers: [],
  total: 0,
  error: { message: 'Failed to fetch the numbers', name: 'FailedFetch' },
});
export const createSuccessful = (payload: number[]): State => ({
  numbers: payload,
  error: null,
  status: ResponseStatus.Success,
  total: payload.length,
});
