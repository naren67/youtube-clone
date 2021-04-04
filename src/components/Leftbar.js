import React from 'react'
import './Leftbar.css'
import LeftRows from './LeftRows'

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Leftbar() {
          return (
                    <div className='left-bar' >

                             <div className='div-one'>
                             <LeftRows Icon={HomeIcon} title='Home'/>
                            <LeftRows Icon={ExploreIcon} title='Explore'/>
                            <LeftRows Icon={SubscriptionsIcon} title='Subscriptions'/>

                             </div>

                             <div className='middle_line'></div>
                            
                            <div className='div-two'>
                            <LeftRows Icon={VideoLibraryIcon} title='Library'/>
                            <LeftRows Icon={HistoryIcon} title='History'/>
                            <LeftRows Icon={OndemandVideoIcon} title='Your videos'/>
                            <LeftRows Icon={WatchLaterIcon} title='Watch later'/>
                            <LeftRows Icon={ThumbUpAltIcon} title='Liked videos'/>
                            <LeftRows Icon={ExpandMoreIcon} title='Show more'/>
                            </div>

                            <div className='middle_line'></div>

                    </div>
          )
}

export default Leftbar
