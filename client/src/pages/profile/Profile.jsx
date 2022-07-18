import React from 'react'
import ProfileCard from '../../components/profile-side/profile-card/ProfileCard'
import ProfileLeft from '../../components/profile/profile-left/ProfileLeft'
import PostSide from '../../components/post-side/PostSide'
import RightSide from '../../components/right-side/RightSide'
import './Profile.scss'

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft/>
        
      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  )
}

export default Profile