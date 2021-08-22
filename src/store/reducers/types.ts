import { ResponseStatus } from 'shared/types/common';

export type StoreInfo = {
  status: ResponseStatus;
  error: Error;
};
export type StoreData<T extends object> = T;
export type StoreState<T extends object> = StoreInfo & StoreData<T>;
