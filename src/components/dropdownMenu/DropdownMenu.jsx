import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DropdownMenu.css'

const DropdownMenu = (props) => {

    return (
        <div className='dropdown-menu-wrapper'> 
            {
                props.data.map(data => {
                    return (
                        <div style={{backgroundColor: data.backgroundColor, flex: data.fullContainerType? '1 1 100%': '1 1 50%'}}>
                            <p style={{color: data.heading.visible? 'black': 'transparent'}}>{data.heading.value} <br/><span className='subHeading'>{data.heading.subHeading}</span></p>

                            <div>
                                {
                                    data.data.map(data => {
                                        return (
                                            <div className='dropdown-menu-item'>
                                                {data.icon}
                                                <p>{data.title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )    
                })
            }
        </div>
    )
}

export default DropdownMenu