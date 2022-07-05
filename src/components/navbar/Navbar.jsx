import { faAirbnb, faAppStore, faElementor, faIntercom, faStripe } from '@fortawesome/free-brands-svg-icons';
import { faAppleWhole, faAtlas, faBasketShopping, faBlog, faBook, faBookOpen, faBox, faCashRegister, faCheck, faCheckSquare, faCircleInfo, faCircleNodes, faCoins, faCreditCard, faEnvelope, faFileInvoice, faFileInvoiceDollar, faGamepad, faGhost, faLink, faNewspaper, faPlaceOfWorship, faPlane, faPlug, faS, faSatelliteDish, faServer, faShop, faSignal, faStore, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import UserContext, { UserContextProvider } from '../../context/userContext';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import './Navbar.css'

const Navbar = () => {
    const userContext = useContext(UserContext);
    const hamburgerRef = useRef(null);
    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const dropdownProductsList = [
        {

            heading: {
                visible: true,
                value: "PAYMENTS",
            },
            data: [
                {
                    title: "Payments",
                    icon: <FontAwesomeIcon icon={faCreditCard} />
                },
                {
                    title: "Checkout",
                    icon: <FontAwesomeIcon icon={faBasketShopping} />
                },
                {
                    title: "Billing",
                    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} />
                },
                {
                    title: "Elements",
                    icon: <FontAwesomeIcon icon={faElementor} />
                },
                {
                    title: "Terminal",
                    icon: <FontAwesomeIcon icon={faTerminal} />
                },
                {
                    title: "Invoicing",
                    icon: <FontAwesomeIcon icon={faFileInvoice} />
                },
                {
                    title: "Payment Links",
                    icon: <FontAwesomeIcon icon={faLink} />
                },
                {
                    title: "Connect",
                    icon: <FontAwesomeIcon icon={faCircleNodes} />
                }
            ]
        },
        {
            heading: {
                visible: true,
                value: "BUSINESS OPERATIONS"
            },
            data: [
                {
                    title: "Radar",
                    icon: <FontAwesomeIcon icon={faSatelliteDish} />
                },
                {
                    title: "Sigma",
                    icon: <FontAwesomeIcon icon={faSignal} />
                },
                {
                    title: "Atlas",
                    icon: <FontAwesomeIcon icon={faAtlas} />
                },
                {
                    title: "Delta",
                    icon: <FontAwesomeIcon icon={faCircleInfo} />
                },
            ]
        },
        {
            heading: {
                visible: true,
                value: "FINANCIAL SERVICES",
            },
            data: [
                {
                    title: "Issuing",
                    icon: <FontAwesomeIcon icon={faCheckSquare} />
                }
            ]
        }
    ]

    const dropdownSolutionsList = [
        {
            heading: {
                visible: true,
                value: "USE CASES"
            },
            data: [
                {
                    title: "Ecommerce",
                    icon: <FontAwesomeIcon icon={faCashRegister} />
                },
                {
                    title: "SaaS",
                    icon: <FontAwesomeIcon icon={faS} />
                },
                {
                    title: "Marketplaces",
                    icon: <FontAwesomeIcon icon={faStore} />
                },
                {
                    title: "Embedded Finance",
                    icon: <FontAwesomeIcon icon={faCoins} />
                },
            ]
        },
        {
            heading: {
                visible: false,
                value: "NO-VALUE"
            },
            data: [
                {
                    title: "Platforms",
                    icon: <FontAwesomeIcon icon={faPlaceOfWorship} />
                },
                {
                    title: "Creator Economy",
                    icon: <FontAwesomeIcon icon={faGhost} />
                },
                {
                    title: "Crypto",
                    icon: <FontAwesomeIcon icon={faBookOpen} />
                },
                {
                    title: "Enterprise",
                    icon: <FontAwesomeIcon icon={faShop} />
                }
            ]
        },
        {
            heading: {
                visible: true,
                value: "INTEGRATIONS & PARTNER SOLUTIONS"
            },
            data: [
                {
                    title: "App Marketplaces",
                    icon: <FontAwesomeIcon icon={faShop} />
                },
                {
                    title: "Partern Ecosystem",
                    icon: <FontAwesomeIcon icon={faAirbnb} />
                }
            ]
        }
    ]

    const dropdownDevelopersList = [
        {
            fullContainerType: true,
            heading: {
                visible: true,
                value: "DOCUMENTATION",
                icon: <FontAwesomeIcon icon={faBookOpen} />,
                subHeading: 'Start integrating Stripe’s products and tools',
            },
            data: []
        },
        {
            fullContainerType: false,
            heading: {
                visible: true,
                value: "GET STARTED",
                icon: <FontAwesomeIcon icon={faBookOpen} />,
            },
            data: [
                {
                    title: 'Prebuilt Checkout',
                    icon: <FontAwesomeIcon icon={faCheck} />,
                },
                {
                    title: 'Libraries and SDKs',
                    icon: <FontAwesomeIcon icon={faBookOpen} />,
                },
                {
                    title: 'Plugins',
                    icon: <FontAwesomeIcon icon={faPlug} />,
                },
                {
                    title: 'Code Samples',
                    icon: <FontAwesomeIcon icon={faTerminal} />,
                },
            ]
        },
        {
            fullContainerType: false,
            heading: {
                visible: true,
                value: "GUIDES",
                icon: <FontAwesomeIcon icon={faBookOpen} />,
            },
            data: [
                {
                    title: 'Accept Online Payments',
                    icon: <FontAwesomeIcon icon={faCreditCard} />,
                },
                {
                    title: 'Manage Subscriptions',
                    icon: <FontAwesomeIcon icon={faBookOpen} />,
                },
                {
                    title: 'Send Payments',
                    icon: <FontAwesomeIcon icon={faCoins} />,
                },
                {
                    title: 'Set up in-person payments',
                    icon: <FontAwesomeIcon icon={faCashRegister} />,
                },
            ]
        },
        {
            fullContainerType: false,
            // backgroundColor: 'grey',
            heading: {
                visible: true,
                value: "REFERENCES",
                // icon: <FontAwesomeIcon icon={faBookOpen} />,
            },
            data: [
                {
                    title: 'Full API Reference',
                    icon: <FontAwesomeIcon icon={faBookOpen} />,
                },
                {
                    title: 'Stripe App docs',
                    icon: <FontAwesomeIcon icon={faTerminal} />,
                },
                {
                    title: 'Support',
                    icon: <FontAwesomeIcon icon={faEnvelope} />,
                }
            ]
        },
        {
            fullContainerType: false,
            // backgroundColor: 'grey',
            heading: {
                visible: false,
                value: "",
                // icon: <FontAwesomeIcon icon={faBookOpen} />,
            },
            data: [
                {
                    title: 'API Status',
                    icon: <FontAwesomeIcon icon={faServer} />,
                },
                {
                    title: 'API Change logs',
                    icon: <FontAwesomeIcon icon={faBox} />,
                }
            ]
        }

    ]

    const dropdownCompanyList = [
        {
            heading: {
                visible: true,
                value: 'CHECKOUT'
            },
            data: [
                {
                    title: 'Customers',
                    icon: <FontAwesomeIcon icon={faIntercom} />
                },
                {
                    title: 'Jobs',
                    icon: <FontAwesomeIcon icon={faGamepad} />
                },
                {
                    title: 'Newsroom',
                    icon: <FontAwesomeIcon icon={faNewspaper} />
                },
                {
                    title: 'Build a Stripe App',
                    icon: <FontAwesomeIcon icon={faAppStore} />
                }
            ]
        },
        {
            heading: {
                visible: false,
                value: ''
            },
            data: [
                {
                    title: 'Blog',
                    icon: <FontAwesomeIcon icon={faBlog} />
                },
                {
                    title: 'Stripe Press',
                    icon: <FontAwesomeIcon icon={faStripe} />
                },
                {
                    title: 'Sessions',
                    icon: <FontAwesomeIcon icon={faBookOpen} />
                },
                {
                    title: 'Become a Partner',
                    icon: <FontAwesomeIcon icon={faPlane} />
                }
            ]
        }
    ]

    const logout = () => {
        userContext.setUserData([]);
        localStorage.removeItem('loggedInUser');
    }

    useEffect(() => {
        if (menuOpen === true) {
            menuRef.current.classList.add('slideMenuOnScreen');
        } else {
            menuRef.current.classList.remove('slideMenuOnScreen');
        }
    }, [menuOpen])
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser && loggedInUser.length !== 0) {
            userContext.setUserData(loggedInUser.split(','));
        }
    }, [])
    

    const toggleMenu = () => {
        hamburgerRef.current.classList.toggle('open')
        if (hamburgerRef.current.classList.contains('open')) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }

    }

    return (
        <>
            <header>
            <div className='navbar-container'>
                <div className="navbar-wrapper">
                    <div className='logo'>PAY<span>X</span></div>
                    <div className='navbar--nav-menu' ref={menuRef}>
                        <div></div>
                        <ul>
                            <li className='dropdown-menu--product'>
                                <p>Product</p>
                                <div className='dropdown-menu-product'>
                                    <DropdownMenu data={dropdownProductsList} />
                                </div>
                            </li>
                            <li className='dropdown-menu--solution'>
                                <p>Solutions</p> 
                                <div className='dropdown-menu-solution'>
                                    <DropdownMenu data={dropdownSolutionsList} />
                                </div>
                            </li>
                            <li className='dropdown-menu--developer'>
                                <p>Developers</p> 
                                <div className='dropdown-menu-developer'>
                                    <DropdownMenu data={dropdownDevelopersList} />
                                </div>
                            </li>
                            <li className='dropdown-menu--company'>
                                <p>Company</p>
                                <div className='dropdown-menu-company'>
                                    <DropdownMenu data={dropdownCompanyList} />
                                </div>
                            </li>
                            <li className='dropdown-menu--pricing'><p>Pricing</p></li>
                        </ul>
                        {
                            userContext.userData.length === 0?
                            <div className='navbar--nav-action'>
                                <Link to='/login' style={{textDecoration: "none"}}><div className="navbar--nav-action-btn">Login</div></Link>
                                <Link to='/signup' style={{textDecoration: "none"}}><div className="navbar--nav-action-btn">Sign up</div></Link>
                            </div>:
                            <div className="navbar--nav-action" >
                                <div className='username'>hi, {userContext.userData[1].toLowerCase()}</div>
                                <div className="navbar--nav-action-btn" onClick={logout}>Logout</div>
                            </div>
                        }
                    </div>
                    <div onClick={()=>toggleMenu()} className="menu-btn">
                        <div className='hamburger-btn' ref={hamburgerRef}></div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Navbar