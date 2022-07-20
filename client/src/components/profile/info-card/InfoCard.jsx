import React, { useState } from 'react'
import './InfoCard.scss'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../../modals/ProfileModal';

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className="info-card">
            <div className="info-head">
                <h4>Your Info</h4>
                <div className="edit">
                    <UilPen  height='1.2rem' width='2rem' onClick={() => setModalOpened(true)}/>
                    <ProfileModal 
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>In Relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Live In </b>
                </span>
                <span>Bekasi</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Shopee</span>
            </div>

            <button className="logout-button">Logout</button>
        </div>
    )
}

export default InfoCard