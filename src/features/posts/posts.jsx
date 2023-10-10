import { Post } from "../post/post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import { useLocation } from "react-router-dom";
import { getFetchUrl } from "../../utils/getFetchUrl";

export const Posts = () => {
    
    const post = useSelector(state => state.post);
    const dispatch = useDispatch();
    const { pathname, search } = useLocation();
    const fetchUrl = getFetchUrl(pathname, search);

    useEffect(() => {
        dispatch(fetchPosts(fetchUrl))
    }, [fetchUrl]);

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
