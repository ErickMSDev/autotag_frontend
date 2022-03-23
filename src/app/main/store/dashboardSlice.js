import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmbedInfo = createAsyncThunk('embedInfo/getEmbedInfo', async () => {
  const response = await axios.post('/api/EmbedInfo/GetEmbedInfoDashboard');
  const data = await response.data;

  return data;
});

const dashboardSlice = createSlice({
  name: 'dashboard',
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

export default dashboardSlice.reducer;
