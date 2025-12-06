import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import  {fetchGithubUser} from './githubAPI';


export const getUser = createAsyncThunk(
    'github/getUser',
    async (username) => {
        const data = await fetchGithubUser(username);
        return data;
    }
);


const githubSlice = createSlice({
    name: 'github',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state) => {
                state.loading = false;
                state.error = 'user not found';
            })
    }
})

export default githubSlice.reducer;