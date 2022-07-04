import { faCirclePlay, faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import abhishek from '../../assets/abhishek.jpg'; 
import React from 'react';
import './SessionsScreens.css';

const SessionsScreen = () => {
  return (
    <div className='session-screen-container'>
        <div className='genre-list-wrapper'>
            <ul>
                <li className='active'>Popular</li>
                <li>Integration</li>
                <li>Gateway</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className='video-cards-wrapper'>
            <div className='video-card'>
                <div className="video-area-design">
                    <div className="video-top-layer">
                        <div className='play-btn-wrapper'>
                            <FontAwesomeIcon icon={faCirclePlay} className="play-btn" />
                        </div>
                        <div className='video-controls'>
                            <div className='progress-bar'></div>
                            <div className='max-btn'></div>
                        </div>
                    </div>
                </div>
                <div className="video-desc">
                    <div className='video-user-info'>
                        <img className='user-image' src={abhishek} alt="" />
                        <div>abhishek</div>
                    </div>
                    <div className='video-likes-wrapper'>
                        <FontAwesomeIcon style={{color: "#FF6361"}} icon={faHeart}/>
                        <FontAwesomeIcon className='message-icon' icon={faMessage}/>
                    </div>
                </div>
            </div>            
            <div className='video-card'>
                <div className="video-area-design-2">
                    <div className="video-top-layer">
                        <div className='play-btn-wrapper'>
                            <FontAwesomeIcon icon={faCirclePlay} className="play-btn" />
                        </div>
                        <div className='video-controls'>
                            <div className='progress-bar'></div>
                            <div className='max-btn'></div>
                        </div>
                    </div>
                </div>
                <div className="video-desc">
                    <div className='video-user-info'>
                        <img className='user-image' src={abhishek} alt="" />
                        <div>abhishek</div>
                    </div>
                    <div className='video-likes-wrapper'>
                        <FontAwesomeIcon style={{color: "#FF6361"}} icon={faHeart}/>
                        <FontAwesomeIcon className='message-icon' icon={faMessage}/>
                    </div>
                </div>
            </div>            
            <div className='video-card'>
                <div className="video-area-design">
                    <div className="video-top-layer">
                        <div className='play-btn-wrapper'>
                            <FontAwesomeIcon icon={faCirclePlay} className="play-btn" />
                        </div>
                        <div className='video-controls'>
                            <div className='progress-bar'></div>
                            <div className='max-btn'></div>
                        </div>
                    </div>
                </div>
                <div className="video-desc">
                    <div className='video-user-info'>
                        <img className='user-image' src={abhishek} alt="" />
                        <div>abhishek</div>
                    </div>
                    <div className='video-likes-wrapper'>
                        <FontAwesomeIcon style={{color: "#FF6361"}} icon={faHeart}/>
                        <FontAwesomeIcon className='message-icon' icon={faMessage}/>
                    </div>
                </div>
            </div>            
        </div>
        <div>

        </div>
    </div>
  )
}

export default SessionsScreen