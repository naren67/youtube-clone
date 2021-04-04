import React from 'react'
import './Studiopage.css'
import {Avatar} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function Studiopage({studioPic, tick, studioName, studioSub, studioVideos, studioDescription}) {
          return (
                    <div>
                              <div className='studioPersonInfo'>
                             
                             <div className='studioLogo'>
                             <Avatar alt='' className='avatar' src='{studioPic}' />
                             
                             </div>

                             <div className='studioMiddleInfo'>
                                       
                                       <div className='verifed'>
                                       <p className='studioName'>{studioName}</p>
                                       <p className='tick'><CheckCircleIcon/></p>
                                       </div>

                                       <div className='studioSubAndViews'>
                                       <p>{studioSub}</p>
                                       <p>{studioVideos}</p>
                                       </div>

                                       <p className='studioDescription'>{studioDescription}</p>
                             </div>

                             <div className='studioBtn'>
                                       <button className='studioSubBtn'>SUBSCRIBED</button>

                             </div>

                             <div className='bell'>
                              <NotificationsNoneIcon/>
                             </div>
                    </div>

                    <div className='studioBottomLine'></div>
                    </div>

                    
          )
}

export default Studiopage
