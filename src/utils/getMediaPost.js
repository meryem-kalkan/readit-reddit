import Markdown from "markdown-to-jsx"

export const getMediaPost = (post) => {
    if (post.post_hint === 'image') {
        return <img src={post.url} className='postmedia'/>
    } if (post.post_hint === 'hosted:video') {
        return <video controls className='postmedia'><source src={post.media.reddit_video.hls_url} type="video/mp4"></source></video>
    } if (post.is_gallery) {
        return <img src={`https://i.redd.it/${post.gallery_data.items[0].media_id}.jpg`} className='postmedia'/>
    } if (post.post_hint === 'link') {
        return <div className="linkpost"><a href={post.url} style={{textDecoration: 'underline', width: '25rem'}}>{post.url}</a> {post.thumbnail !== 'default' && <img src={post.thumbnail}/>}</div>
    } if (post.selftext) {
        return <Markdown>{post.selftext}</Markdown>
    }
}