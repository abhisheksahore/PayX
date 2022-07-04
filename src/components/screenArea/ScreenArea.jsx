import { faApple, faCcApplePay } from '@fortawesome/free-brands-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ScreenArea.css'

const ScreenArea = () => {
  return (
    <div className='screen-container'>
        <div className='card-wrapper'>
            <div className="card">
                <div className='upper-section'>
                    <FontAwesomeIcon icon={faApple} style={{color: 'white', marginLeft: '.75rem', marginTop: '.65rem', fontSize: '1.3rem'}}/>
                    <FontAwesomeIcon icon={faQrcode} style={{color: 'white', marginRight: '.75rem', marginTop: '.65rem', fontSize: '1.2rem'}}/>
                </div>
                <div className="lower-section">
                    <div className="lower-top">
                        XXXX-XXXX-XXXX
                    </div>
                    <div className="lower-bottom">
                        <div>
                            Abhishek Sahore
                        </div>
                        <div>
                            7/11
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pay-btn">
            <FontAwesomeIcon icon={faApple} /> Pay
        </div>
        <div className='else-pay-with-container'>
            <div className='border-boundary'></div>
            <div className='else-pay-with'>Or pay with card</div>
            <div className='border-boundary'></div>
        </div>

        <div className="pay-with-card">
            <div style={{fontSize: '.75rem', fontWeight: '600'}}>  
                Email
            </div>
            <dir className='div-text-box email-box'></dir>

            <div className='card-info'>
                <div style={{fontSize: '.75rem', fontWeight: '600', marginBottom: '1rem'}}>
                    Card Information
                </div> 
                <div className='div-text-box c-no-box'> <p>Number</p></div>
                <div className='m-cvv-section'>
                    <div className='div-text-box m-box'><p>MM/YY</p></div>
                    <div className='div-text-box cvv-box'><p>CVV</p></div>
                </div>
            </div>
            <div className="pay-btn">
                Pay
            </div>
        </div>
    </div>
  )
}

export default ScreenArea