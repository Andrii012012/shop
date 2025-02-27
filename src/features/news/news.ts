import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBaseOptionsSlice, INews } from "../../interface/interface";
import { callServer } from "../utils/callServer";

export interface IInitialNews extends IBaseOptionsSlice {
  news: INews | null;
}

const initialState: IInitialNews = {
  error: null,
  loading: "idle",
  news: null,
};

export const getNewsThunk = createAsyncThunk(
  "news/get",
  async (_, { rejectWithValue }) => {
    return callServer("src/servers/news.json", rejectWithValue);
  }
);

const news = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsThunk.pending, (state: IInitialNews) => {
        state.loading = "pending";
      })
      .addCase(
        getNewsThunk.fulfilled,
        (state: IInitialNews, action: PayloadAction<INews>) => {
          state.loading = "succeeded";
          state.news = action.payload;
        }
      )
      .addCase(getNewsThunk.rejected, (state: IInitialNews) => {
        state.loading = "failed";
        state.error = "something is wrong...";
      });
  },
});

export const ReducerNews = news.reducer;
