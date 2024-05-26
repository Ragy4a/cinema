import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DIRECTORS_SLICE_NAME } from '../../constants';

const initialState = {
    directors: [],
    status: 'idle',
    error: null,
}

const directorsSlice = createSlice({
    name: DIRECTORS_SLICE_NAME,
    initialState,
    extraReducers: () => {}
})

export default directorsSlice.reducer;