import { Post } from "../post/post";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./commentsSlice";
import { Comment } from "../comment/comment";
import { getFormattedNumber } from "../../utils/getFormattedData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';

export const Comments = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const comment = useSelector(state => state.comment);
    const post = useSelector(state => state.comment.post);
    const comment_num = getFormattedNumber(post.comment);

     useEffect(() => {
      dispatch(fetchComments(pathname));
     }, []);

       if (comment.loading) return (
       <div>loading ...</div>
       );

       if (!comment.loading && comment.error) return (
        <div>error: {comment.error}</div>
       )
            
       if (!comment.loading && comment.comments.length > 0) {
        return (
        <section>
         <Post post={post}/>   
         <section>
         <h2>Comments ({comment_num})</h2>
         {comment.comments.map(comment => {
                    return  <Comment comment={comment} key={comment.id}/>
                })}
         </section>
        </section>
       )} else {
        return (
            <div style={{fontSize: '22px', display: 'flex', marginTop: '7rem', flexDirection: 'column'}}>
              <FontAwesomeIcon icon={faCommentSlash} />
              <p>No comments yet</p>
            </div>
       )
       }
       
}