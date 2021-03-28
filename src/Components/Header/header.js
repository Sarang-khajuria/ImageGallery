import React from 'react'
import './header.css'
import {logo} from '../../Constants/constants'

const Header = (props) => {
  return(
    <>
    <div className = "header-section">
      <div className="logo"> {logo}</div>
      <div className="title">Ping This </div>
    </div>
    <div className="header-image">
      <img src="https://i.picsum.photos/id/999/4000/2667.jpg?hmac=mTyBy8HWG_rqFam5j6PDtddQR2yBgA_EGhHdzx_SyPw" height="300px" />
    </div>
    </>
  )
}

export default Header;