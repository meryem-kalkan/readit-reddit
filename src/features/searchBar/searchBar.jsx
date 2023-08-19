import './searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { setSearchValue } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';

export const SearchBar = () => {
    const dispatch = useDispatch()
   const searchValue = useSelector(state => state.search.searchValue);
   const handleSearchValue = (e) => {
      dispatch(setSearchValue(e.target.value));
   }
   const clearSearchValue = () => {
    dispatch(setSearchValue(''))
   }

    return (
        <div className='searchBar'>
            <input type='text' placeholder='search' value={searchValue} onChange={handleSearchValue}/>
            <FontAwesomeIcon icon={faCircleXmark } className='icons' onClick={clearSearchValue}/>
        </div>
    )
}