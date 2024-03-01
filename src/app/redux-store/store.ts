import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "./login/slice";
import userReducer from "./users/slice";
import categoryReducer from "./category/slice";
import newsReducer from "./news/slice";
export const store = configureStore({
  reducer: {
    loginState: loginReducer,
    userState: userReducer,
    categoryState: categoryReducer,
    newsState: newsReducer,
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
