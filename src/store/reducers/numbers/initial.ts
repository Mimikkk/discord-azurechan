import { ResponseStatus } from 'shared/types/common';
import { NumbersState } from 'store/reducers/numbers/types';

export const initial: NumbersState = {
  numbers: [],
  error: null,
  status: ResponseStatus.Idle,
};
