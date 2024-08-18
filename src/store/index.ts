import { configureStore } from '@reduxjs/toolkit';

import trackersReducer from 'store/trackers/trackersSlice';

export const store = configureStore({
  reducer: {
    teams: trackersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
