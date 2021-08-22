import { Nullable, ResponseStatus } from 'shared/types/common';

export type State = {
  numbers: number[];
  total: number;
  status: ResponseStatus;
  error: Nullable<Error>;
};
