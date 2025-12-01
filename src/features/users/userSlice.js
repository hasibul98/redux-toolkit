import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await fetch('https://randomuser.me/api/?results=50');
    const data = await res.json();
    return data.results;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        
        loading: false,
        error: null,
        searchText: '',
    },
    reducers: {
        setSearchText : (state, action) => {
            state.searchText = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false;
                state.error = "failde to fetch users";
            });
    },
});

export const {setSearchText} = userSlice.actions;
export default userSlice.reducer;

