import './menu.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits } from './menuSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
     const menuDisplay = useSelector(state => state.search.menuDisplay);
     const subreddit = useSelector(state => state.subreddit);
     const dispatch = useDispatch();

     useEffect(() => {
      dispatch(fetchSubreddits())
     }, [])

    return (
        <div className={`menu ${menuDisplay && 'slide'}`}>
          <h1>Subreddit</h1>
          {subreddit.loading && <div>loading ... </div>}
          {!subreddit.loading && subreddit.error ? <div>{subreddit.error}</div> : null}
          {!subreddit.loading && subreddit.subreddits.length > 0 ? (
             subreddit.subreddits.map(subreddit => {
              return (
                <Link className='subreddits' key={subreddit.id}>
                  {subreddit.icon_img && <img src={subreddit.icon_img} style={{width: '25px', height: '25px', marginRight: '0.4rem'}}/>}
                  {subreddit.display_name}
                </Link>
              )
             })
          ) : null}
        </div>
    )
}