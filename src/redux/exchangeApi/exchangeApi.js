import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'redux/helpers';

export const exchangeApi = createApi({
  reducerPath: 'Exchange',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.apilayer.com/fixer',
  }),
  tagTypes: 'Exchanges',
  endpoints: builder => ({
    getExchange: builder.query({
      query: () => ({
        url: '/symbols',
      }),
      providesTags: ['Exchange'],
    }),
    getLatest: builder.query({
      query: base => ({
        url: `/latest?base=${base}`,
      }),
      providesTags: ['Exchange'],
    }),
    getConvert: builder.query({
      query: (to, from, amount) => ({
        url: `/convert?to=${to}&from=${from}&amount=${amount}`,
      }),
      providesTags: ['Exchange'],
    }),
  }),
});

export const { useGetExchangeQuery, useGetLatestQuery } = exchangeApi;
