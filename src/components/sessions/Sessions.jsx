import React from 'react'
import './Sessions.css'
import IPhoneMockup from '../iphoneMockup/IPhoneMockup'
import SessionsScreen from '../sessionsScreen/SessionsScreen'

const Sessions = () => {
  return (
    <div className='sessions-container'>
        <div className='sessions-info'>
            <div className='pre-heading'>Virtual events</div>
            <div className='session-heading'>Watch sessions on demand</div>
            <div className='section-details-text session-text'>Stripe Sessions—our annual conference—is now available to watch on demand. Learn more about the future of the internet economy and see new Stripe products in action.</div>
            <div className='cta-register-btn '>Watch now</div>
        </div>
        <div className='session-iphone-mockup'>
            <IPhoneMockup ScreenArea={<SessionsScreen />} />
        </div>
    </div>
  )
}

export default Sessions