import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { TrackersType } from 'types/api/trackersType';
import service from 'store/services/service';

export interface TrackersState {
  trackersId: TrackersType | null;
  isError: boolean;
  isLoading: boolean;
  message: string;
  errors: ErrorResponse | null | undefined;
}

interface ErrorResponse {
  message: string;
}

// Создание асинхронного thunk для получения команды по ID
export const getTrackersId = createAsyncThunk<
  TrackersType, // Тип возвращаемого значения
  string, // Тип параметра (ID)
  { rejectValue: ErrorResponse } // Тип ошибки
>('GET_TRACKERID', async (id: string, thunkAPI) => {
  try {
    const response = await service.getTrackersId(id);
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

// Создание slice для управления состоянием команды по ID
const trackerIdSlice = createSlice({
  name: 'trackersId',
  initialState: {
    trackersId: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null,
  } as TrackersState,
  reducers: {
    resetTrackersErrors: (state) => {
      state.errors = null;
    },
  }, // Необходимо явно указать, даже если пусто
  extraReducers: (builder) => {
    builder
      .addCase(getTrackersId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getTrackersId.fulfilled,
        (state, action: PayloadAction<TrackersType>) => {
          state.isLoading = false;
          state.trackersId = action.payload;
        },
      )
      .addCase(
        getTrackersId.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isError = true;
          state.isLoading = false;
          state.message = action.payload?.message || 'Error';
          state.trackersId = null;
        },
      );
  },
});

export const { resetTrackersErrors } = trackerIdSlice.actions;

export default trackerIdSlice.reducer;
