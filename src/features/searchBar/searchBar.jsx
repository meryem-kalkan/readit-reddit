import './searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { setSearchValue } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
   const searchValue = useSelector(state => state.search.searchValue);
   const handleSearchValue = (e) => {
      dispatch(setSearchValue(e.target.value));
   }
   const clearSearchValue = () => {
    dispatch(setSearchValue(''))
   }

   const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search?q=${searchValue}`)
    dispatch(setSearchValue(''))
   }

    return (
            <form onSubmit={handleSubmit} className='searchBar'>
            <input type='text' placeholder='search' value={searchValue} onChange={handleSearchValue}/>
            <FontAwesomeIcon icon={faCircleXmark } className='icons' onClick={clearSearchValue}/>
            </form>
    )
}