import React from 'react';
import { contactDetails } from '../contactData';

const ContactSection = () => {
    return (
        <section className="contact spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__text">
                            <div className="section-title">
                                <span>Information</span>
                                <h2>Contact Us</h2>
                                <p>Madefit Gents: The perfect place to find the latest trends in men's fashion.</p>
                            </div>
                            <ul>
                                <li>
                                    <h4>{contactDetails.address.area}</h4>
                                    <p>
                                        {contactDetails.address.street}, {contactDetails.address.district}, {contactDetails.address.state} <br />
                                        <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
                                    </p>
                                </li>
                                <li>
                                    <a href={contactDetails.whatsappGroup} target="_blank" rel="noopener noreferrer">
                                        <h4>Whatsapp Group</h4>
                                        <p>Click here to Join !</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="map">
                            <iframe
                                src={contactDetails.googleMapsEmbedUrl}
                                height="500"
                                style={{ border: 0, width: '100%' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Madefit Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
