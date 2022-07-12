import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.scss'

const LogoSearch = () => {
  return (
    <div className="logo-search">
        <img src={Logo} alt="Logo Search" />
        <div className="search">
            <input type="text" placeholder="#Explore"></input>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch