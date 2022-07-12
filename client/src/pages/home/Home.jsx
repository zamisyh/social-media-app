import React from 'react'
import ProfileSide from '../../components/profile-side/ProfileSide'

const Home = () => {
  return (
    <div className="home">
        <ProfileSide />
        <div className="post-side">Posts</div>
        <div className="right-side">Right Side</div>
    </div>
  )
}

export default Home