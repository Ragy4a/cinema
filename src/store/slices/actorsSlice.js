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

export const createActor = createAsyncThunk(
    `${ACTORS_SLICE_NAME}/createActor`,
    async (actor, { rejectWithValue }) => {
        try {
            const { status, data } = await api.post(`${ACTORS_SLICE_NAME}/`, actor);
            if (status >= 400) throw new Error(`Error with creating actor. Error status is ${status}.`)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const editActor = createAsyncThunk(
    `${ACTORS_SLICE_NAME}/editActor`,
    async (actor, { rejectWithValue }) => {
        try {
            const { status, data } = await api.put(`${ACTORS_SLICE_NAME}/${actor.id}`, actor);
            if (status >= 400) throw new Error(`Error with editing actor. Error status is ${status}.`)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteActor = createAsyncThunk(
    `${ACTORS_SLICE_NAME}/deleteActor`,
    async (actorId, { rejectWithValue }) => {
      try {
        const { status } = await api.delete(`${ACTORS_SLICE_NAME}/${actorId}`);
        if(status >= 400) throw new Error(`Error deleting actor with ID ${actorId}. Error status is ${status}.`);
        return actorId;
      } catch (error) {
        return rejectWithValue(error.message);
      }
  }
);

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
            .addCase(createActor.fulfilled, (state, { payload }) => {
                state.actors.push(payload);
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(editActor.fulfilled, (state, { payload }) => {
                state.actors = state.actors.map((actor) =>
                actor.id === payload.id ? payload : actor);
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(deleteActor.fulfilled, (state, { payload }) => {
                state.actors = state.actors.filter(actor => actor.id !== payload);
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(getActors.pending, setPending)
            .addCase(createActor.pending, setPending)
            .addCase(editActor.pending, setPending)
            .addCase(deleteActor.pending, setPending)
            .addCase(getActors.rejected, setRejected)
            .addCase(createActor.rejected, setRejected)
            .addCase(editActor.rejected, setRejected)
            .addCase(deleteActor.rejected, setRejected)
    }
})

export default actorsSlice.reducer;