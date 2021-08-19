import { startup } from './shared/actions';
import 'config';
import './listeners';

startup().catch(console.error);
