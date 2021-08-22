import { createStore } from '@reduxjs/toolkit';
import { middleware } from 'store/middleware';
import { rootReducer as reducer } from 'store/reducers';

export const store = createStore(reducer, middleware);
