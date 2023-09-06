import Markdown from "markdown-to-jsx"

export const getMediaPost = (post) => {
    if (post.post_hint === 'image') {
        return <img src={post.url} className='postmedia'/>
    } else if (post.post_hint === 'hosted:video') {
        return <video controls className='postmedia'><source src={post.media.reddit_video.hls_url} type="video/mp4"></source></video>
    } else if (post.is_gallery) {
        return <img src={`https://i.redd.it/${post.gallery_data.items[0].media_id}.jpg`} className='postmedia'/>
    } else if (post.post_hint === 'link') {
        return <div className="linkpost"><a href={post.url} style={{textDecoration: 'underline', width: '25rem'}}>{post.url}</a> {post.thumbnail.img !== 'default' && <img src={post.thumbnail.img}/>}</div>
    } else if (post.post_hint === 'self') {
        return <Markdown>{post.selftext}</Markdown>
    }
}