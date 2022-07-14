import React from 'react'
import PostShare from './post-share/PostShare'
import Posts from './posts/Posts'
import './PostSide.scss'

const PostSide = () => {
  return (
    <div className="post-side">
       <PostShare />
       <Posts />
    </div>
  )
}

export default PostSide