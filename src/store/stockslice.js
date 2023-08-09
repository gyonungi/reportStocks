import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { iex } from "../config/iex";

export const fetchStock = createAsyncThunk(
  "stock/fetchStock",
  async (params) => {
    const { pageCount, search } = params;
    const { data } = await axios.get(
      `${iex.base_url}/${search}?offset=${pageCount}&last=10&token=${iex.api_token}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  pageCount: 1,
  searchValue: "",
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStock(state, action) {
      state.items = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
  extraReducers: {
    [fetchStock.pending]: (state) => {
      state.items = [];
    },
    [fetchStock.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [fetchStock.rejected]: (state) => {
      state.item = [];
    },
  },
});

export const { setStock, setPageCount } = stockSlice.actions;

export const stockReducer = stockSlice.reducer;
