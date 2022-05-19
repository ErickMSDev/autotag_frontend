import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmbedInfo = createAsyncThunk('embedInfo/getEmbedInfo', async (name) => {
  const response = await axios.post(`/api/EmbedInfo/GetEmbedInfo${name}`);
  const data = await response.data;

  return data;
});

const powerBiSlice = createSlice({
  name: 'transits',
  initialState: {
    embedInfo: undefined,
  },
  extraReducers: (builder) => {
    builder.addCase(getEmbedInfo.fulfilled, (state, action) => {
      // Add user to the state array
      state.embedInfo = action.payload;
    });
  },
});

export default powerBiSlice.reducer;
