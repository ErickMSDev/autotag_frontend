import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPortalAccount = createAsyncThunk('portalAccount/getPortalAccount', async (id) => {
  const response = await axios.post(`/api/PortalAccount/Get`, { id });
  const data = await response.data;

  return data === undefined ? null : data;
});

export const removePortalAccount = createAsyncThunk(
  'portalAccount/removePortalAccount',
  async (val, { getState }) => {
    const { id } = getState().main.portalAccount;
    await axios.post(`/api/PortalAccount/Remove`, { id });

    return id;
  }
);

export const savePortalAccount = createAsyncThunk(
  'portalAccount/savePortalAccount',
  async (portalAccountData, { getState }) => {
    const { portalAccount } = getState().main.portalAccount;

    const response = await axios.post('/api/PortalAccount/Save', {
      ...portalAccount,
      ...portalAccountData,
    });
    const data = await response.data;

    return data;
  }
);

const portalAccountSlice = createSlice({
  name: 'portalAccount',
  initialState: null,
  reducers: {
    resetPortalAccount: () => null,
    newPortalAccount: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: undefined,
          portalId: '',
          run: '',
          password: '',
          enabled: true,
        },
      }),
    },
  },
  extraReducers: {
    [getPortalAccount.fulfilled]: (state, action) => action.payload,
    [savePortalAccount.fulfilled]: (state, action) => action.payload,
    [removePortalAccount.fulfilled]: (state, action) => null,
  },
});

export const { newPortalAccount, resetPortalAccount } = portalAccountSlice.actions;

export default portalAccountSlice.reducer;
