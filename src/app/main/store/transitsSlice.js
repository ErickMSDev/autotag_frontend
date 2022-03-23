import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmbedInfo = createAsyncThunk('embedInfo/getEmbedInfoTransits', async () => {
  const response = await axios.post('/api/EmbedInfo/GetEmbedInfoTransits');
  const data = await response.data;

  return data;
});

const transitsSlice = createSlice({
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

export default transitsSlice.reducer;
