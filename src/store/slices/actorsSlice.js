import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api'
import { ACTORS_SLICE_NAME, setPending, setRejected } from '../../constants';

const initialState = {
    actors: [],
    status: 'idle',
    error: null,
}

export const getActors = createAsyncThunk(
    `${ACTORS_SLICE_NAME}/getActors`,
    async (_, { rejectWithValue }) => {
        try {
            const { status, data } = await api.get(`${ACTORS_SLICE_NAME}/`);
            if(status >= 400) throw new Error(`Error with getting actors. Error status is ${status}.`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const actorsSlice = createSlice({
    name: ACTORS_SLICE_NAME,
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getActors.fulfilled, (state, { payload }) => {
                state.actors = payload;
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(getActors.pending, setPending)
            .addCase(getActors.rejected, setRejected)
    }
})

export default actorsSlice.reducer;