export type Nullable<T> = T | null;

export enum ResponseStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}
