import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';
import { exchangeApi } from './exchangeApi/exchangeApi';

const rootReducer = combineReducers({
  [exchangeApi.reducerPath]: exchangeApi.reducer,
  currency: currencyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(exchangeApi.middleware),
});
