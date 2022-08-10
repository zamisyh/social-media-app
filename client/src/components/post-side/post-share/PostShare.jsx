import React, { useState, useRef } from 'react'

import './PostShare.scss'
import ProfileImage from '../../../img/profileImg.jpg'
import color from './PostShare.scss'
import { useDispatch, useSelector } from 'react-redux'

import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from '@iconscout/react-unicons'
import { uploadImageAction } from '../../../actions/upload.action'
import { uploadPostAction } from '../../../actions/ post.action'

const PostShare = () => {
  const css = {
    photo: color.photo,
    video: color.video,
    location: color.location,
    schedule: color.schedule,
  }

  const dispatch = useDispatch()

  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const descriptionRef = useRef()
  const user = useSelector((state) => state.AUTH_REDUCER.auth)

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]){
        let img = e.target.files[0]
        setImage(img)
    }
  }

const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
        user_id : user.properties.data._id,
        description: descriptionRef.current.value
    }

    if (image) {
        const data = new FormData()
        const fileName = Date.now() + image.name
        data.append("name", fileName)
        data.append("file", image)
        newPost.image = fileName
        
        try {
            dispatch(uploadImageAction(data))
        } catch (error) {
            console.log(error)
        }
    }

    dispatch(uploadPostAction(newPost))

  }

  return (
    <div className="post-share">
        <img className="profile-photo" src={ProfileImage} alt="" />
        <div className="container-input">
            <input
                ref={descriptionRef}
                required 
                type="text" 
                placeholder="What's happening ?" 

            />
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
                <button onClick={handleSubmit} className="button ps-button">Share</button>

                <div style={{ display: 'none' }}>
                    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                </div>
            </div>

            { image && (
                <div className="priview-image">
                    <UilTimes className="btn-times" onClick={() => setImage(null) } />
                    <img className="image-priview" src={URL.createObjectURL(image)} alt=""/>
                </div>
            )}

        </div>
    </div>
  )
}

export default PostShare
