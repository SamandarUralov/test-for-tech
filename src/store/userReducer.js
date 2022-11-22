import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requests from "../services/httpService";

const initialState = {
  users: [],
  loading: false,
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (count = 10) => {
    const response = await requests.get("/", { params: { results: count } });
    return response.results;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { loading, users } = usersSlice.actions;

export default usersSlice.reducer;
