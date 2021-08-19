import { startup } from 'shared/actions';
import 'config';

console.clear();
startup().catch(console.error);
