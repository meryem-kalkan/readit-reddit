import { createSlice } from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchBarDisplay: false,
        searchValue: '',
        menuDisplay: false,
    },
    reducers: {
        setSearchBarDisplay: (state, action) => {
            state.searchBarDisplay = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setMenuDisplay: (state, action) => {
            state.menuDisplay = action.payload;
        }
    }
})

export default searchSlice.reducer;
export const {setSearchBarDisplay, setSearchValue, setMenuDisplay} = searchSlice.actions;