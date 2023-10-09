import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    comments: [],
    post: {},
    error: ''
}

export const fetchComments = createAsyncThunk('comment/fetchComments', async(pathname) => {
        const response = await fetch(`https://www.reddit.com${pathname}.json`);
        const jsonResponse = await response.json();
        return jsonResponse;
})

const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    extraReducers: builder => {
     builder.
     addCase(fetchComments.pending, state => {
        state.loading = true
     })
     .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false
        state.error = ''

        const postResponseObj = action.payload[0].data.children[0].data;
        state.post = {
            author: postResponseObj.author,
            created: postResponseObj.created,
            subreddit: postResponseObj.subreddit_name_prefixed,
            header: postResponseObj.title,
            score: postResponseObj.score,
            comment: postResponseObj.num_comments,
            media: postResponseObj.media,
            id: postResponseObj.id,
            url: postResponseObj.url,
            post_hint: postResponseObj.post_hint,
            selftext: postResponseObj.selftext,
            is_gallery: postResponseObj.is_gallery,
            gallery_data: postResponseObj.gallery_data,
            thumbnail: postResponseObj.thumbnail,
            link: postResponseObj.permalink,
        }

        let comments = [];
        let commentsResponseArray = action.payload[1].data.children;
        commentsResponseArray.forEach(comment => {
        if (comment.kind !== "t1") return;
        if (comment.data.author === "[deleted]" || comment.data.body === "[deleted]") return;
            let newComment = {
                comment: comment.data,
                id: comment.data.id,
                author: comment.data.author,
                created: comment.data.created,
                body: comment.data.body,
                score: comment.data.score,
                edited: comment.data.edited
            }
            comments.push(newComment)
        });
        state.comments = [...comments]
     })
     .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false
        state.comments = []
        state.error = action.error.message
     })
    }
})

export default commentsSlice.reducer;