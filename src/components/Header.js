//rfce

import React,{useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'

function Header() {

          const[givenInput,updateInput]=useState('')
          // console.log(givenInput)

          return (
                    <div className='header'>


                             <div className='header__icon'>
                             <MenuIcon className='burger' />
                             <Link className='logo-link' to='/'>
                             <img className='u-logo' src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
                             <p>YouTube<sup>IN</sup> </p>
                             </Link>
                             
                             </div>

                            <div className='header__search'>
                            <input value={givenInput} onChange={e=>updateInput(e.target.value)} placeholder='Search' className='header__input'/>
                             
                            <span className='search-icon'>

                            <Link to={`/search/${givenInput}`}>
                                <SearchIcon className='search-btn' />
                            </Link>

                            </span>
            
                              <MicIcon className='mic'/>
                            </div>

                            <div className='header__menus'>
                              <VideoCallIcon className='videocall' />
                              <AppsIcon className='dot-menu' />
                              <NotificationsIcon className='bell'/>
                              <AccountCircleIcon className='account'/>
                            </div>

                    </div>
          )
}

export default Header
