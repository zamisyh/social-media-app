import React from 'react'
import './PostComponent.scss'
import Comment from '../../../../img/comment.png'
import Share from '../../../../img/share.png'
import Heart from '../../../../img/like.png'
import NotLike from '../../../../img/notlike.png'
import { useSelector } from 'react-redux'

const PostComponent = ({data}) => {
  
  const user = useSelector((state) => state.AUTH_REDUCER.auth)

  return (
    <div className="container">
        <div className="container-post">
          <img className="image-post" src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
          <div className="reaction-post">
              <img src={data.liked ? Heart : NotLike} alt="" />
              <img src={Comment} alt="" />
              <img src={Share} alt="" />
          </div>

          <span style={{ fontSize: '14px', color:'gray' }}>{data.likes} likes</span>
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