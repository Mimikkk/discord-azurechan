import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { services } from 'store/services';

export const middleware = applyMiddleware(thunk.withExtraArgument(services));
