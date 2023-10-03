import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getFormattedNumber, getFormattedTime } from '../../utils/getFormattedData';
import { getMediaPost } from '../../utils/getMediaPost';

export const Post = ({post}) => {
     const score = getFormattedNumber(post.score);
     const created = getFormattedTime(post.created);
     const comment = getFormattedNumber(post.comment);
     const media = getMediaPost(post)

    return (
        <div className='post'>
        <p id='top-text'>{post.subreddit}  <span style={{fontWeight: 300}}>. {created} </span></p> 
        <p id='top-text' style={{fontWeight: 500}}>by {post.author} </p>
        <h2>{post.header}</h2>
        {media}
        {post.post_hint !== 'self' && <p>{post.selftext}</p>}
        <div className='vote'>
        <FontAwesomeIcon icon={faCircleDown} flip="both" id='upvote'/>
        <p>{score}</p>
        <FontAwesomeIcon icon={faCircleDown} id='downvote'/>
        </div>
        <Link to={post.link} className='comments'>
        <FontAwesomeIcon icon={faMessage} />
        <p>{comment}</p>
        </Link>
     </div>
    )
}