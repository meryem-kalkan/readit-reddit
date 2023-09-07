import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    subreddits: [],
    error: ''
}

export const fetchSubreddits = createAsyncThunk('subreddit/fetchSubreddits', async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json');
    const jsonResponse = await response.json();
    return jsonResponse;
})

const menuSlice = createSlice({
    name: 'subreddit',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchSubreddits.pending, state => {
            state.loading = true
        })
        .addCase(fetchSubreddits.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''

            let subreddits = [];
            let subredditsResponseArray = action.payload.data.children;
            subredditsResponseArray.forEach(subreddit => {
                let newSubreddit = {
                    display_name: subreddit.data.display_name,
                    id: subreddit.data.id,
                    icon_img: subreddit.data.icon_img
                }
                subreddits.push(newSubreddit)
            });
            state.subreddits = [...subreddits]
        })
        .addCase(fetchSubreddits.rejected, (state, action) => {
            state.loading = false
            state.subreddits = []
            state.error = action.error.message
        })
    }
})

export default menuSlice.reducer;