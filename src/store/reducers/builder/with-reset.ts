import { handleInitial } from 'store/reducers/builder/handlers';
import { ResetBuilderProps, ResetHandlers } from './types';
import { StoreData } from 'store/reducers/types';

export const generateResetHandlers = <State extends object>(
  initial: StoreData<State>,
): ResetHandlers<State> => ({
  handleReset: () => handleInitial(initial),
});

export const withReset = <State extends object>({
  builder,
  reset,
  handlers: { handleReset },
}: ResetBuilderProps<State>) => {
  builder.addCase(reset, handleReset);
};
