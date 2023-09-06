import { Hotbar } from "../../features/hotbar/hotbar";
import { Posts } from "../../features/posts/posts";

export const PostsFeed = () => {
    return (
        <div style={{minWidth: '38rem'}}>
        <Hotbar/>
        <Posts/>
        </div>
    )
}