import React from 'react'
import './RightSide.scss'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from './TrendCard/TrendCard'

const RightSide = () => {
  return (
    <div className="right-side">
        <div className="nav-icons">
            <img className="img-nav-icons" src={Home} alt="" />
            <UilSetting />
            <img className="img-nav-icons" src={Noti} alt="" />
            <img className="img-nav-icons" src={Comment} alt="" />
        </div>

        <TrendCard />
    </div>
  )
}

export default RightSide