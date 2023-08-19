import { createSlice } from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchBarDisplay: false,
        searchValue: '',
        menuDisplay: false,
    },
    reducers: {
        setSearchBarDisplay: (state) => {
            state.searchBarDisplay = !state.searchBarDisplay;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setMenuDisplay: (state) => {
            state.menuDisplay = !state.menuDisplay;
        }
    }
})

export default searchSlice.reducer;
export const {setSearchBarDisplay, setSearchValue, setMenuDisplay} = searchSlice.actions;