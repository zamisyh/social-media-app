import React from 'react'
import PostSide from '../../components/post-side/PostSide'
import ProfileSide from '../../components/profile-side/ProfileSide'

const Home = () => {
  return (
    <div className="home">
        <ProfileSide />
        <PostSide />
        <div className="right-side">Right Side</div>
    </div>
  )
}

export default Home