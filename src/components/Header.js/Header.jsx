import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchBar } from '../../features/searchBar/searchBar';
import logo from './logo.png';
import { setMenuDisplay, setSearchBarDisplay } from '../../features/searchBar/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Header = () => {
  const dispatch = useDispatch();
  const searchBarDisplay = useSelector(state => state.search.searchBarDisplay)

    
    return (
        <div className='header'>
         <FontAwesomeIcon icon={faBarsStaggered} style={{color: "#65019c",}} size='xl' className='icons' onClick={() => dispatch(setMenuDisplay())}/>
         {searchBarDisplay ? <SearchBar/> : <Link to="/" id='logo-text'><span>READ</span><img src={logo} id='logo' alt='purple reddit logo'/><span>IT</span></Link> }
         <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#65019c",}} size='xl' className='icons' onClick={() => dispatch(setSearchBarDisplay())}/>
        </div>
    )
}