import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MOVIES_SLICE_NAME } from '../../constants';

const initialState = {
    movies: [],
    status: 'idle',
    error: null,
}

const moviesSlice = createSlice({
    name: MOVIES_SLICE_NAME,
    initialState,
    extraReducers: () => {}
})

export default moviesSlice.reducer;