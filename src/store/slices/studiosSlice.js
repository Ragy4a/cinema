import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STUDIOS_SLICE_NAME } from '../../constants';

const initialState = {
    studios: [],
    status: 'idle',
    error: null,
}

const studioSlice = createSlice({
    name: STUDIOS_SLICE_NAME,
    initialState,
    extraReducers: () => {}
})

export default studioSlice.reducer;