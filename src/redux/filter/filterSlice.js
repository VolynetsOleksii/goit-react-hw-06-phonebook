import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
      filter: ''
    },
    reducers: {
      setFilter: (state, action) => {
        state.filter = action.payload;
      },
    },
  });

  const persistFilterConfig = {
    key: 'filter',
    storage,
    whitelist: ['filter'],
  };

  export const persistedFilterReducer = persistReducer(
    persistFilterConfig,
    filterSlice.reducer
  );

  export const { setFilter } = filterSlice.actions;