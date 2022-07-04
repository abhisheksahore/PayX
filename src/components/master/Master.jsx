import React from 'react'
import Footer from '../footer/Footer'
import Main from '../main/Main'
import Navbar from '../navbar/Navbar'
import Section from '../section/Section'
import Sessions from '../sessions/Sessions'
import { faForwardFast, faGears, faLeaf, faQrcode, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faApple, faCcApplePay, faGoogle, faInstagram, faMicrosoft, faPadlet, faUber } from '@fortawesome/free-brands-svg-icons';

const Master = () => {

    const ClientsSectionData = [
        {
          heading: {
            value: <p className='client-section-heading'>Simplified Payments Infrastructure for more than <span style={{ color: "#A41AD2" }}>10,000,000</span> clients around the world.</p>,
            isElement: true,
          },
          data: [
            {
              type: 'icons',
              data: [
                {
                  title: 'Uber',
                  icon: <FontAwesomeIcon className='client-logo' icon={faUber} />,
                },
                {
                  title: 'Amazon',
                  icon: <FontAwesomeIcon className='client-logo' icon={faAmazon} />,
                },
                {
                  title: 'Google',
                  icon: <FontAwesomeIcon className='client-logo' icon={faGoogle} />,
                },
                {
                  title: 'Microsoft',
                  icon: <FontAwesomeIcon className='client-logo' icon={faMicrosoft} />,
                },
                {
                  title: 'Instagram',
                  icon: <FontAwesomeIcon className='client-logo' icon={faInstagram} />,
                }
              ]
            }
          ]
        }
      ]
    
      const whyPayX = [
        {
          heading: {
            preHeading: <p className='pre-heading'>Why PayX</p>,
            value: <p className='client-section-heading'>A technology-first approach to payments and finance</p>
          },
          data: [
            {
              type: 'details',
              data: [
                {
                  title: <div className='section-details-title'>Close to the metal</div>,
                  text: <div className='section-details-text'>From <span style={{ color: "#635BFF" }}>direct integrations</span> with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.</div>,
                  icon: <img src="https://www.joomlasrilanka.com/wp-content/uploads/2020/09/ecommerce-online-shopping-design-concept-illustration.png" alt="shopping" />
                },
                {
                  title: <div className='section-details-title'>Battle-tested reliability</div>,
                  text: <div className='section-details-text'>Our systems operate with <span style={{ color: "#635BFF" }}>99.99%+</span> uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.</div>,
                  icon: <img className="section-details-icon" src="https://razorpay.com/build/browser/static/payment-suite.c8ef898b.png" alt="" />
                },
                {
                  title: <div className='section-details-title'>Intelligent optimizations</div>,
                  text: <div className='section-details-text'>Our machine learning models train on <span style={{ color: "#635BFF" }}>billions</span> of data points and help increase revenue across conversion, fraud, revenue recovery, and more.</div>,
                  icon: <div className='card-wrapper card-wrapper-lg'>
                    <div className="card">
                      <div className='upper-section'>
                        <FontAwesomeIcon icon={faApple} style={{ color: 'white', marginLeft: '.75rem', marginTop: '.65rem', fontSize: '1.3rem' }} />
                        <FontAwesomeIcon icon={faQrcode} style={{ color: 'white', marginRight: '.75rem', marginTop: '.65rem', fontSize: '1.2rem' }} />
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
                },
                {
                  title: <div className='section-details-title'>Watch Sessions on demand</div>,
                  text: <div className='section-details-text'>Stripe Sessions—our annual conference—is now available to <span style={{ color: "#635BFF" }}>watch on demand.</span> Learn more about the future of the internet economy and see new Stripe products in action.</div>,
                  icon: <FontAwesomeIcon className="section-details-icon" icon={faPadlet} />
                }
              ]
            }
          ]
        }
      ]

    return (
        <>
            <Navbar />
            <Main />
            <Section data={ClientsSectionData} mainBackground={"#FBFBFB"} />
            <Section data={whyPayX} mainBackground={"#FFF"} />
            <Sessions />
            <Footer />
        </>
    )
}

export default Master