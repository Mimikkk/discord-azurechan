import { combineReducers } from '@reduxjs/toolkit';
import { reducer as Testing } from 'store/reducers/testing';

export const rootReducer = combineReducers({
  Testing,
});
