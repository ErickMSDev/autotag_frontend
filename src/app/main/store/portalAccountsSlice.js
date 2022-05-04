import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPortalAccounts = createAsyncThunk('portalAccounts/getPortalAccounts', async () => {
  const response = await axios.post('/api/PortalAccount/GetAll');
  const data = await response.data;

  return data;
});

export const removePortalAccounts = createAsyncThunk(
  'portalAccounts/removePortalAccounts',
  async (portalAccountIds) => {
    await axios.post('/api/PortalAccount/RemoveMultiples', { ids: portalAccountIds });

    return portalAccountIds;
  }
);

const portalAccountsSlice = createSlice({
  name: 'portalAccounts',
  initialState: {
    searchText: '',
    arrPortalAccounts: undefined,
  },
  reducers: {
    setPortalAccountsSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortalAccounts.fulfilled, (state, action) => {
        // Add user to the state array
        state.arrPortalAccounts = action.payload;
      })
      .addCase(removePortalAccounts.fulfilled, (state, action) => {
        const currentState = current(state);
        state.arrPortalAccounts = currentState.arrPortalAccounts.filter(
          (p) => !action.payload.includes(p.id)
        );
      });
  },
});

export const { setPortalAccountsSearchText } = portalAccountsSlice.actions;

export default portalAccountsSlice.reducer;
