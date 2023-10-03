import { Routes, Route } from "react-router-dom";
import './main.css';
import { PostsFeed } from "../../views/postsfeed/postsFeed";
import { SearchResultsPage } from "../../views/searchresultspage/searchResultsPage";
import { UniquePost } from "../../views/uniquepost/uniquePost";

export const Main = () => {
    return (
            <Routes>
                <Route path="*" element={<PostsFeed/>}/>
                <Route path="/search" element={<SearchResultsPage/>}/>
                <Route path="/r/:subreddit/comments/*" element={<UniquePost />} />
            </Routes>
       
    )
}