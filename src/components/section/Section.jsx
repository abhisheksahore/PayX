import React from 'react';
import './Section.css'

const Section = (props) => {
    return (
        <div className='section-container' style={{ backgroundColor: props.mainBackground ? props.mainBackground : 'transparent' }}>
            {
                props.data ? props.data.map(data => {
                    return (
                        <div>
                            <div>
                                <div>{data && data.heading && data.heading.preHeading}</div>
                                <div className='section-heading'>{data && data.heading && data.heading.value ? data.heading.value : ''}</div>
                            </div>
                            <div >
                                {
                                    data.data ? data.data.map(data => {
                                        return (
                                            data && data.type === 'icons' ?
                                                <div className='icons-container'>
                                                    {data.data.map(data => {
                                                        return (
                                                            <div className=''>{data.icon}</div>
                                                        )
                                                    })}
                                                </div> :
                                                data && data.type === 'details' ?
                                                    <div className='details-container'>
                                                        {data.data.map(data => {
                                                            return (
                                                                <div>
                                                                    <div className='icon-wrapper'>{data.icon}</div>

                                                                    <div className='details-area'>
                                                                        <div>{data.title}</div>
                                                                        <div>{data.text}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div> :
                                                    null
                                        )
                                    }) : null
                                }
                            </div>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default Section