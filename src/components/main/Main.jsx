import React from 'react'
import './Main.css'
import IPhoneMockup from '../iphoneMockup/IPhoneMockup'
import ScreenArea from '../screenArea/ScreenArea'

const Main = () => {
    return (
        <div className='main-container'>
            <div className="main-wrapper">
                <div className='main-iphone-mockup-container'>
                    <IPhoneMockup ScreenArea={<ScreenArea />} />
                </div>
                <div className='hero-section-wrapper'>
                    <div className="heading">Payment Infrastructure of the <span style={{color: "#FD4656"}}>Future</span></div>
                    <div className='hero-sub-heading'>
                        Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                    </div>
                    <div className='hero-cta'>
                        <div className='cta-register-btn'>Start Now</div>
                        <div className='cta-sales-btn'>Contact sales</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main