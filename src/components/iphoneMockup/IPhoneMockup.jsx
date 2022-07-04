import { faBatteryFull, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react';
import ScreenArea from '../screenArea/ScreenArea';
import './IPhoneMockup.css'

const IPhoneMockup = (props) => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const now = new Date()
        const timeStr = `${now.getHours()}:${now.getMinutes()}`
        setTime(timeStr)
        const removeInterval = setInterval(() => {
            const now = new Date()
            const timeStr = `${now.getHours()}:${now.getMinutes()}`
            console.log(timeStr)
            setTime(timeStr)
        }, 60000);
        return () => {
            clearInterval(removeInterval);
        }
    }, [])
    return (
        <div className="iphone_mockup">
            <div className="iphone_mockup_left_btns_wrapper">
                <div className="iphone_mockup_mute_btn"></div>
                <div className="iphone_mockup_volume_btns_wrapper">
                    <div className="iphone_mockup_volume_up_btn"></div>
                    <div className="iphone_mockup_volume_down_btn"></div>
                </div>
            </div>
            <div className="outer">
                <div className="band_wrapper">
                    <div className="band"></div>
                    <div className="band lower_band"></div>
                </div>
                <div className="middle">
                    <div className="inner">
                        <div className="inner_most">
                            <div style={{ display: 'flex', borderTopLeftRadius: "32px", borderTopRightRadius: "32px", justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px', marginBottom: '3.5px' }}>
                                    <div style={{ fontWeight: '600', width: '45px', fontSize: '.75rem', textAlign: 'center' }}>{time}</div>
                                </div>
                                <div className="iphone_notch">
                                    <div className="iphone_notch_cam visibility_hidden"></div>
                                    <div className="iphone_notch_speaker"></div>
                                    <div className="iphone_notch_cam"></div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '10px', marginBottom: '3.5px' }}>
                                    <FontAwesomeIcon style={{ fontWeight: "800", fontSize: '.7rem' }} icon={faWifi} />
                                    <FontAwesomeIcon style={{ display: 'flex', alignItems: 'flex-end', position: 'relative', top: '1px', fontSize: '1rem' }} icon={faBatteryFull} />
                                </div>
                            </div>

                            {props.ScreenArea}
                        </div>
                    </div>
                </div>
            </div>
            <div className="iphone_mockup_power_btn"></div>
        </div>
    )
}

export default IPhoneMockup