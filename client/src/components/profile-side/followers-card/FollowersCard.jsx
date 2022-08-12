import React from 'react'
import './FollowersCard.scss'
import { dataFollowers } from '../../../common/data-dummy/Follower'

const FollowersCard = () => {
  return (
    <div className="follower-card">
      <h3>Who is following you</h3>

      {dataFollowers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div className="follower-container">
              <img
                className="follower-img"
                src={follower.img}
                alt={follower.username}
              />
              <div className="follower-name">
                <span>{follower.name}</span>
                <span>{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard
