import { faFacebook, faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faIndianRupeeSign, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-upper-section'>
            <div className='footer-cta-section'>
                <h1>Easy <span style={{color: '#FF626E'}}>Payments</span></h1>
                <div className='footer-subtext'>
                    we take the work out the payments, so you can accomplish more.
                </div>
                <div className='subs-section' style={{display: "flex", flexDirection: "column", alignItems: "center", gap: '2rem', marginTop: '4rem'}}>
                    <div style={{fontWeight: "800"}}>Subscribe to our News Letter</div>
                    <input className='subscribe-input' type="text" placeholder='Subscribe to our newsletter' />
                    <div className='subscribe-btn'>Subscribe</div>
                </div>
            </div>
            <div className='footer-list'>
                <div>
                    <p>Payments</p>
                    <ul>
                        <li>Atlas</li>
                        <li>Connect</li>
                        <li>Billing</li>
                        <li>Invoicing</li>
                        <li>Payouts</li>
                        <li>Financial Connections</li>
                        <li>Radar</li>
                        <li>Revenue Recognition</li>
                        <li>Sigma</li>
                        <li>Terminal</li>

                    </ul>
                </div>
                <div>
                    <p>Use cases</p>
                    <ul>
                        <li>SaaS</li>
                        <li>Platforms</li>
                        <li>Marketplaces</li>
                        <li>Ecommerce</li>
                        <li>Creator Economy</li>
                        <li>Crypto</li>
                        <li>Embedded Finance</li>
                        <li>Payouts</li>
                    </ul>
                </div>
                <div>
                    <p>Resources</p>
                    <ul>
                        <li>Support</li>
                        <li>Contact</li>
                        <li>Guide</li>
                        <li>Privacy & Terms</li>
                        <li>Licenses</li>
                        <li>COVID-19</li>
                        <li>Sitemap</li>
                        <li>Cookie settings</li>
                    </ul>
                </div>
            </div>

        </div>
        <div className='rights-reservation-area'>
            <div className='rights-section'>
                <div>&copy; 2022 PayX, Inc. &nbsp; All rights reserved</div>
                <div className='sitemap-section'>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Sitemap</div>
                </div>
            </div>
            <div className='social-section'>
                <div style={{display: 'flex', gap: '1rem', justifyContent: "center"}}>
                    <div> <FontAwesomeIcon icon={faLanguage} /> &nbsp; English (IN)</div>
                    <div> <FontAwesomeIcon icon={faIndianRupeeSign} /> &nbsp;INR</div>
                </div>
                <div className='social-icons'>
                    <div><FontAwesomeIcon icon={faFacebook} /></div>
                    <div><FontAwesomeIcon icon={faInstagram} /></div>
                    <div><FontAwesomeIcon icon={faTwitter} /></div>
                    <div><FontAwesomeIcon icon={faYoutube} /></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer