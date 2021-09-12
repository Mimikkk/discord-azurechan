import { StoreData, StoreState } from 'store/reducers/types';

export type NumbersData = StoreData<{ numbers: number[] }>;
export type NumbersState = StoreState<NumbersData>;
