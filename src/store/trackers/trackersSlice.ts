import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { TrackersType } from 'types/api/trackersType';
import service from 'store/services/service';

export interface TrackersState {
  trackersArray: TrackersType[] | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

interface ErrorResponse {
  message: string;
}

export const getTrackers = createAsyncThunk<
  TrackersType[],
  void,
  { rejectValue: ErrorResponse }
>('GET_TRACKERS', async (_, thunkAPI) => {
  try {
    const response = await service.getTrackers();
    return response;
  } catch (error) {
    let err: AxiosError<ErrorResponse>;
    if (axios.isAxiosError(error)) {
      err = error;
      return thunkAPI.rejectWithValue(err.response?.data as ErrorResponse);
    } else {
      return thunkAPI.rejectWithValue({ message: 'Unknown error' });
    }
  }
});

const trackersSlice = createSlice({
  name: 'trackers',
  initialState: {
    trackersArray: null,
    isError: false,
    isLoading: false,
    message: '',
  } as TrackersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrackers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTrackers.fulfilled,
        (state, action: PayloadAction<TrackersType[]>) => {
          state.isLoading = false;
          state.trackersArray = action.payload;
        },
      )
      .addCase(
        getTrackers.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.trackersArray = null;
        },
      );
  },
});

export default trackersSlice.reducer;
