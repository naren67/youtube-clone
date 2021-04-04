import React from 'react'
import './Videocard.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Videocard({thumbnail,avatar,title,channelName,views,timeStamp}) {
          return (
                    <div className='the-card'>

                       <div className='the-card__thumbnail'>
                       <img className='thumb-pic' src={thumbnail} alt='' />
                       </div>

                        <div className='the-card__info'>
                             <AccountCircleIcon className='the-card__profile' src={avatar}/>
                             
                             <div className='title-channelName-time'>
                             <p className='the-card__title'>{title}</p>
                             <p className='the-card__channelName'>{channelName}</p>
                             <p className='the-card__view-time'>{views}-{timeStamp}</p>
                             </div>
                        </div>

                    </div>

                    
          )
}

export default Videocard
