import { Post } from "../post/post";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

export const Posts = () => {
    
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            {post.loading && <div>loading ...</div>}
            {!post.loading && post.error ? <div>error: {post.error}</div> : null}
            {!post.loading && post.posts.length > 0 ? (
                post.posts.map(post => {
                    return(
                    <Post post={post} key={post.id}/>)
                })
                
            ) : null}
        </div>
    )  
}
