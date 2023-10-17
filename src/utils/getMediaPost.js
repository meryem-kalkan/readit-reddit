import Markdown from "markdown-to-jsx"

export const getMediaPost = (post) => {
    if (post.post_hint === 'image') {
        return <img src={post.url} className='postmedia' alt="post image"/>
    } if (post.post_hint === 'hosted:video') {
        return <video controls className='postmedia'><source src={post.media.reddit_video.fallback_url} type="video/mp4"></source></video>
    } 
     if (post.post_hint === 'link' || post.is_gallery) {
        return <div className="linkpost"><a href={post.url} style={{textDecoration: 'underline', width: '25rem'}}>{post.link}</a> {post.thumbnail !== 'default' && <img src={post.thumbnail} alt="thumbnail"/>}</div>
    } if (post.selftext) {
        return <Markdown>{post.selftext}</Markdown>
    }
}