import { Routes, Route } from "react-router-dom";
import './main.css';
import { PostsFeed } from "../../views/postsfeed/postsFeed";
import { SearchResultsPage } from "../../views/searchresultspage/searchResultsPage";
import { UniquePost } from "../../views/uniquepost/uniquePost";
import { BackToTopButton } from "../backToTopButton/backToTopButton";

export const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<PostsFeed/>}/>
                <Route path="/search" element={<SearchResultsPage/>}/>
                <Route path="/r/:subreddit/comments/*" element={<UniquePost />} />
            </Routes>
       <BackToTopButton/>
       </div>
    )
}