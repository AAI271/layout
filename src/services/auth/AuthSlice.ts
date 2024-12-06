import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  token: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface LoginCredentials {
  username: string;
  password: string;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk<User, LoginCredentials, { rejectValue: string }>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // Запрос к API для получения токена
      const response = await axios.post<{ token: string }>(
        'https://fakestoreapi.com/auth/login', 
        credentials
      );
      
      const token = response.data.token;
      
      // Сохраняем токен в localStorage
      localStorage.setItem('token', token);

      // Формируем объект пользователя
      const user: User = {
        id: 1,  // Здесь вы можете добавить логику для получения реального ID пользователя, если нужно
        username: credentials.username,
        token,
      };

      // Возвращаем данные о пользователе
      return user;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data as string);
      }
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token'); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;  // Сохраняем пользователя в состояние
      })
      .addCase(login.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || 'An unknown error occurred';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
