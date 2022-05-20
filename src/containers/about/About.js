import React from 'react';
import './About.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import { about } from '../../website-data';
import UndrawDesigner from '../../components/undrawDesigner/UndrawDesigner';

const About = () => {
  return (
    <section id='about'>
      <div className='about-main'>
        <div className='about-text-div'>
          <div>
            <h1 className='about-text'>
              {' '}
              {about.title} <span className='wave-emoji'>{'👋'}</span>
            </h1>
            {about.subTitle.map((item, idx) => (
              <p key={idx} className='about-text-p subTitle'>
                {item}
              </p>
            ))}

            <SocialMedia />
            <div className='button-about-div'>
              <Button text='Contact me' href='#contact' />
              <Button
                text='See my resume'
                newTab={true}
                href={about.resumeLink}
              />
            </div>
          </div>
        </div>
        <div className='about-image-div'>
          <UndrawDesigner hairColor='#a7a7a7' skinColor='#ffe2c6' />
        </div>
      </div>
    </section>
  );
};

export default About;
