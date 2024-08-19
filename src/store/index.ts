import { configureStore } from '@reduxjs/toolkit';

import trackersReducer from 'store/trackers/trackersSlice';
import trackerIdSlice from 'store/trackerId/trackerIdSlice';

export const store = configureStore({
  reducer: {
    trackers: trackersReducer,
    trackerId: trackerIdSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
