import React, { useState } from 'react'
import './PostComponent.scss'
import Comment from '../../../../img/comment.png'
import Share from '../../../../img/share.png'
import Heart from '../../../../img/like.png'
import NotLike from '../../../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePostService } from '../../../../services/post.service'

const PostComponent = ({data}) => {
  
  const user = useSelector((state) => state.AUTH_REDUCER.auth)
  const [liked, setLiked] = useState(data.likes.includes[user.properties.data._id])
  const [likes, setLikes] = useState(data.likes.length)
  
  
  const handleLike = (e) => {
    setLiked((prev) => !prev)
    likePostService(data._id, user.properties.data._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }

  

  return (
    <div className="container">
        <div className="container-post">
          <img className="image-post" src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
          <div className="reaction-post">
              <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }}  onClick={handleLike}/>
              <img src={Comment} alt="" />
              <img src={Share} alt="" />
          </div>

          <span style={{ fontSize: '14px', color:'gray' }}>{likes} likes</span>
          <div className="detail">
              <span>
                  <b>{data.name}</b>
              </span>
              <span> {data.description}</span>
          </div>
        </div>
    </div>
  )
}

export default PostComponent