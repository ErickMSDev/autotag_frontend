import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPortals = createAsyncThunk('portals/getPortals', async () => {
  const response = await axios.post('/api/Portal/GetAll');
  const data = await response.data;

  return data;
});

const portalsSlice = createSlice({
  name: 'portals',
  initialState: {
    arrPortals: undefined,
  },
  extraReducers: (builder) => {
    builder.addCase(getPortals.fulfilled, (state, action) => {
      state.arrPortals = action.payload;
    });
  },
});

export default portalsSlice.reducer;
