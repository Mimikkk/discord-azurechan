import { ResponseStatus } from 'shared/types/common';
import { StoreData, StoreState } from 'store/reducers/types';

export const handleInitial = <T extends object>(
  initial: StoreData<T>,
): StoreState<T> => ({
  ...initial,
  error: null,
  status: ResponseStatus.Idle,
});
