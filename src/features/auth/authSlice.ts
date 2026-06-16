import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { loginApi } from './api/authApi';
import { AuthState, LoginRequest, LoginResponse } from './types/auth.types';

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await loginApi(email, password);
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message ??
        error?.message ??
        'Login failed',
      );
    }
  },
);

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isGuest: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isGuest = false;
    },

    enterAsGuest: state => {
      state.isGuest = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.data.user;
        state.token = payload.data.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.payload ?? 'Something went wrong';
      });
  },
});

export const {
  logout,
  enterAsGuest,
} = authSlice.actions;

export default authSlice.reducer;