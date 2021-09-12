import { ResponseStatus } from 'shared/types/common';
import { useDispatch, useSelector } from 'store';
import { fetchNumbers, resetNumbers } from 'store/reducers/numbers/actions';
import { selectNumbers } from './selectors';

describe('Numbers Reducer', () => {
  it('should have an initial state', () => {
    const state = useSelector(selectNumbers);
    expect(state).toStrictEqual({
      numbers: [],
      error: null,
      status: ResponseStatus.Idle,
    });
  });

  it('should have dispatched for numbers', async () => {
    await useDispatch(fetchNumbers(5));
    const state = useSelector(selectNumbers);
    expect(state).toStrictEqual({
      numbers: [0, 1, 2, 3, 4],
      error: null,
      status: ResponseStatus.Success,
    });
  });

  it('should have reset the numbers', async () => {
    await useDispatch(resetNumbers());
    const state = useSelector(selectNumbers);
    expect(state).toStrictEqual({
      numbers: [],
      error: null,
      status: ResponseStatus.Idle,
    });
  });
});
