import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmbedInfo = createAsyncThunk('embedInfo/GetEmbedInfoVehicleRanking', async () => {
  const response = await axios.post('/api/EmbedInfo/GetEmbedInfoVehicleRanking');
  const data = await response.data;

  return data;
});

const vehicleRanking = createSlice({
  name: 'vehicleRanking',
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

export default vehicleRanking.reducer;
