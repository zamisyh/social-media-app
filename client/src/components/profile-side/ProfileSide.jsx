import React from 'react'
import FollowersCard from './followers-card/FollowersCard'
import LogoSearch from './logo-search/LogoSearch'
import ProfileCard from './profile-card/ProfileCard'
import './ProfileSide.scss'

const ProfileSide = () => {
  return (
    <div className="profile-side">
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide