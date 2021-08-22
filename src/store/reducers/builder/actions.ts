import { createAction } from '@reduxjs/toolkit';

export const createReset = (prefix: string) => createAction(`@${prefix}/Reset`);
