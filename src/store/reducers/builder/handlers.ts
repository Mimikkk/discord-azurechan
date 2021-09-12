import { ResponseStatus } from 'shared/types/common';
import { StoreData, StoreInfo, StoreState } from 'store/reducers/types';

const initialStoreInfo: StoreInfo = {
  error: null,
  status: ResponseStatus.Idle,
};

export const handleInitial = <T extends object>(
  initial: StoreData<T>,
): StoreState<T> => ({
  ...initial,
  ...initialStoreInfo,
});
