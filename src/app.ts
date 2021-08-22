import { startup } from 'shared/actions';
import 'config';
import client from 'shared/client';
import { useDispatch, useSelect } from 'store';
import { fetchNumbers, selectNumbers } from 'store/reducers/numbers';
import { reset } from 'store/reducers/numbers/actions';

console.clear();
startup().catch(console.error);

client.once('ready', async () => {
  console.log(useSelect(selectNumbers));
  await useDispatch(fetchNumbers(4));
  console.log(useSelect(selectNumbers));
  await useDispatch(reset());
  console.log(useSelect(selectNumbers));
  await useDispatch(fetchNumbers(10));
  console.log(useSelect(selectNumbers));
});
