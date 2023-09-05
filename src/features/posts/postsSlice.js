import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async() => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const jsonResponse = await response.json();
    return jsonResponse;
})

const postsSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: builder => {
     builder
     .addCase(fetchPosts.pending, state => {
        state.loading = true
     })
     .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.error = ''

        let posts = [];
        let postsResponseArray = action.payload.data.children;
        postsResponseArray.forEach(post => {
            let newPost = {
            author: post.data.author,
            created: post.data.created,
            subreddit: post.data.subreddit_name_prefixed,
            header: post.data.title,
            score: post.data.score,
            comment: post.data.num_comments,
            media: post.data.media,
            id: post.data.id,
            post: post.data,
            url: post.data.url,
            post_hint: post.data.post_hint,
            selftext: post.data.selftext,
            is_gallery: post.data.is_gallery,
            gallery_data: post.data.gallery_data,
            thumbnail: {
                img: post.data.thumbnail,
                width: post.data.thumbnail_width,
                height: post.data.thumbnail_height
            }
        }
        posts.push(newPost)
        });
         state.posts = [...posts]
     })
     .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.posts = []
        state.error = action.error.message
     })
    }
})


export default postsSlice.reducer;