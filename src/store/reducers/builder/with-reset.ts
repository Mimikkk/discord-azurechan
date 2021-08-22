import { ResponseStatus } from 'shared/types/common';
import { ResetBuilderProps, ResetHandlers } from './types';
import { StoreData } from 'store/reducers/types';

export const generateResetHandlers = <State extends object>(
  initial: StoreData<State>,
): ResetHandlers<State> => ({
  handleReset: () => ({
    ...initial,
    error: null,
    status: ResponseStatus.Idle,
  }),
});

export const withReset = <State extends object>({
  builder,
  reset,
  handlers: { handleReset },
}: ResetBuilderProps<State>) => {
  builder.addCase(reset, handleReset);
};
