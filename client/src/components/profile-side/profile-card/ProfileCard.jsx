import React from 'react'
import Cover from '../../../img/cover.jpg'
import Profile from '../../../img/profileImg.jpg'
import './ProfileCard.scss'

const ProfileCard = () => {
    const profilePage = true;
    
    return (
        <div className="profile-card">
            <div className="profile-images">
                <img src={Cover} alt="Background" />
                <img src={Profile} alt="Background" />
            </div>
            <div className="profile-name">
                <span>Zamzam Saputra</span>
                <span>Sofware Engineer</span>
            </div>
            <div className="follow-status">
                <hr />
                <div>
                    <div className="follow">
                        <span>7,000</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>5</span>
                        <span>Followers</span>
                    </div>
                    {profilePage && (
                    <>
                        <div className="vl">

                        </div>
                        
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                    </>
                )}
                </div>
                <hr />
            </div>

            {profilePage ? '' : <span className="profile-my">
                My Profile
            </span>}

         
        </div>
    )
}

export default ProfileCard