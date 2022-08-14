import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counter.slice';
import userReducer from './slices/user.slice';
import competitionReducer from './slices/competition.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    competitions: competitionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
