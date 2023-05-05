import React from 'react'
import BrandName from "../../assets/images/logo.png"
import CameraLogo from "../../assets/images/insta-camera.png"
import Love from "../../assets/images/love-removebg.png"
import Igtv from "../../assets/images/igtv.png"
import Add from "../../assets/images/add.png"
import Like from "../../assets/images/like.png"
import Messenger from "../../assets/images/messenger.png"
import Home from '../../assets/images/home.png'
import compass from '../../assets/images/explore.png'
import Profile from '../../assets/images/profile.jpg'
import '../Navbar/Navbar.css'

function Navigation() {
  return (
    <div className='navbar'>
      < div className='nav-wrapper'>
        <img  src={BrandName} alt='brand name' className='brand-img'/> 
        <input type='text' className='search-box'placeholder='search'/>
        <div className='nav-items'>
          <img src={Home} alt='Home Icon' className='icon'/>
          <img src={Messenger} alt='Messenger Icon' className='icon'/>
          <img src={Add} alt='Add Icon' className='icon'/>
          <img src={compass} alt='Compass Icon' className='icon'/>
          <img src={Like} alt='Like Icon' className='icon'/>
          <div className='icon user-profile'>
            <img src={Profile}  alt=''/>
          </div>
          </div>
      </div>
    </div>
    
  )
}

export default Navigation