import { OnInteractionFn } from './listeners';
import { AsyncFn } from './functions';

export type Handler<S extends string, Handle extends AsyncFn> = Map<S, Handle>;

export type OnInteractionHandlerMap<S extends string> = Handler<
  S,
  OnInteractionFn
>;
