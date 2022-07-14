import React, { useState, useRef } from 'react'

import './PostShare.scss'
import ProfileImage from '../../../img/profileImg.jpg'
import color from './PostShare.scss'

import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from '@iconscout/react-unicons'

const PostShare = () => {
  const css = {
    photo: color.photo,
    video: color.video,
    location: color.location,
    schedule: color.schedule,
  }

  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]){
        let img = e.target.files[0]
        setImage({
            image: URL.createObjectURL(img)
        })
    }
  }

  return (
    <div className="post-share">
        <img className="profile-photo" src={ProfileImage} alt="" />
        <div className="container-input">
            <input type="text" placeholder="What's happening ?" />
            <div className="container-post-option">
                <div className="option" style={{ color: css.photo }}
                    onClick={() => imageRef.current.click()}
                >
                    <UilScenery />
                    Photo
                </div>
                <div className="option" style={{ color: css.video }}>
                    <UilPlayCircle />
                    Video
                </div>
                <div className="option" style={{ color: css.location }}>
                    <UilLocationPoint />
                    Location
                </div>
                <div className="option" style={{ color: css.schedule }}>
                    <UilSchedule />
                    Schedule
                </div>
                <button className="button ps-button">Share</button>

                <div style={{ display: 'none' }}>
                    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                </div>
            </div>

            { image && (
                <div className="priview-image">
                    <UilTimes className="btn-times" onClick={() => setImage(null) } />
                    <img className="image-priview" src={image.image} alt=""/>
                </div>
            )}

        </div>
    </div>
  )
}

export default PostShare
