import './menu.css';
import { useSelector } from 'react-redux';
export const Menu = () => {
     const menuDisplay = useSelector(state => state.search.menuDisplay);

    return (
        <div className={`menu ${menuDisplay && 'slide'}`}>
          <h1>Subreddit</h1>
        </div>
    )
}