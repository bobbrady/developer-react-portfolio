import React from 'react';
import './Contact.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { contactInfo } from '../../website-data';

export default function Contact({ burgerActive }) {
  return (
    <section className={burgerActive ? 'scroll-burger' : ''} id='contact'>
      <div className='contact-div-main'>
        <div className='contact-header'>
          <h1 className='heading contact-title'>{contactInfo.title}</h1>
          <p className='contact-subtitle'>{contactInfo.subtitle}</p>

          <div className='contact-text-div'>
            <a
              className='contact-detail-email'
              href={'mailto:' + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className='contact-image-div'>
          <img
            alt='Contact Mail'
            src={require('../../assets/images/contactMail.webp')}
          ></img>
        </div>
      </div>
    </section>
  );
}
