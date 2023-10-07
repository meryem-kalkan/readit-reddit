import { Post } from "../post/post";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./commentsSlice";
import { Comment } from "../comment/comment";

export const Comments = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const comment = useSelector(state => state.comment);
    const post = useSelector(state => state.comment.post);

     useEffect(() => {
      dispatch(fetchComments(pathname));
     }, [])

    return (
        <section>
           <Post post={post} key={post.id}/>
           <section>
            {comment.loading && <div>loading ...</div>}
            {!comment.loading && comment.error ? <div>error: {comment.error}</div> : null}
            {!comment.loading && comment.comments.length > 0 ? (
                comment.comments.map(comment => {
                    return (
                        <Comment comment={comment} key={comment.id}/>
                    )
                })
            ) : null} 
           </section>
        </section>
    )
}