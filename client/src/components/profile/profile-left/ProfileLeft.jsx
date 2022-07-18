import React from 'react'
import './ProfileLeft.scss'
import LogoSearch from '../../profile-side/logo-search/LogoSearch'
import FollowerCard from '../../profile-side/followers-card/FollowersCard'
import InfoCard from '../info-card/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="profile-side">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  )
}

export default ProfileLeft