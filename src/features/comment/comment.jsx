import { getFormattedTime, getFormattedNumber } from '../../utils/getFormattedData';
import Markdown from 'markdown-to-jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

export const Comment = ({comment}) => {
    const created = getFormattedTime(comment.created);
    const score = getFormattedNumber(comment.score);
    const commentEdit = comment.edited ? getFormattedTime(comment.edited) : null;
    
    return (
        <div className='post'>
            <p id='top-text' style={{fontWeight: 500}}>by {comment.author}  <span style={{fontWeight: 300}}>. {created} </span> <i style={{fontWeight: 300}}>{commentEdit ? `• edited ${commentEdit}` : ""}</i></p>
            <div><Markdown>{comment.body}</Markdown></div>
            <div className='vote'>
            <FontAwesomeIcon icon={faCircleDown} flip="both" id='upvote'/>
              <p>{score}</p>
             <FontAwesomeIcon icon={faCircleDown} id='downvote'/>
             </div>
             </div>
    )
}