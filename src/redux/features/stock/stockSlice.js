import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apikey = '177a809841021e802a2af049a777057a';

export const fetchStock = createAsyncThunk('stock/fetchStock', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/${data}?limit=12000&apikey=${apikey}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const appId = 'BrG3Lb1Ak66AmCJSmU2U';

export const getView = createAsyncThunk('stockGetViews', async () => {
  try {
    const response = await axios.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const makeView = createAsyncThunk('stockPostView', async (id) => {
  const response = await axios.post(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, { item_id: id });
  return response.data;
});

const initialState = {
  data: [],
  keys: [],
  Views: [],
  laoding: false,
  error: '',
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    clear: (id, state) => {
      if (state.data[0][2] !== id) {
        state.data = [];
        state.keys = [];
      }
    },
  },
  extraReducers: (buidler) => {
    buidler
      .addCase(fetchStock.pending, (state) => {
        state.laoding = true;
      })
      .addCase(fetchStock.fulfilled, (state, action) => {
        state.laoding = false;
        const numbers = [];
        action.payload.forEach((item) => {
          const values = Object.values(item);
          numbers.push(values);
        });
        state.data = numbers;
        if (action.payload.length > 1) {
          const data = Object.keys(action.payload[0]);
          state.keys = data;
        }
      })
      .addCase(fetchStock.rejected, (state) => {
        state.laoding = false;
        state.error = 'Failed to fetch';
      })
      .addCase(getView.pending, (state) => {
        state.laoding = true;
      })
      .addCase(getView.fulfilled, (state, action) => {
        state.laoding = false;
        state.Views = (action.payload);
      })
      .addCase(getView.rejected, (state, action) => {
        state.laoding = false;
        state.error = action.payload.message;
      });
  },
});

export default stockSlice.reducer;
export const { clear } = stockSlice.actions;
