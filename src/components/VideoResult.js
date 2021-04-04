import React from 'react'
import './VideoResult.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function VideoResult({thumb, title, views, timeAgo, channelLogo, channelName, tick, desc, oldOrNew, quality}) {
          return (
                    <div className='listOfVideos'>
                              
                              <div className='thumbnailed'>
                                        <img src={thumb} alt='' />
                              </div>

                              <div className='listedVideosInfos'>

                                    <div className='titled'>
                                              <p>{title}</p>
                                    </div>

                                    <div className='viewsAndTimeAgo'>
                                            <p>{views}</p>
                                            <p>- {timeAgo}</p>  
                                    </div>

                                    <div>

                                        
                                          <div className='channelNameAndTick'>
                                          <div className='resultLogo'>
                                          <p><AccountCircleIcon style={{ fontSize: 32 }}/></p>
                                          </div>
                                          <p className='theName'>{channelName}</p>
                                          <p><CheckCircleIcon className='tickColor' style={{ fontSize: 13 }}/></p>
                                          </div>
                                    </div>

                                    <div className='desc'>
                                              <p>{desc}</p>
                                    </div>

                                    <div className='oldNew'>
                                              <p className='newAndNew'>{oldOrNew}</p>
                                              <p className='quality'>{quality}</p>
                                    </div>
                              </div>
                              
                    </div>
          )
}

export default VideoResult