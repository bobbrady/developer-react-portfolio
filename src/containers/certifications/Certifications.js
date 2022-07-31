import React from 'react';
import './Certifications.css';
import { certifications } from '../../website-data';
import CertificationCard from '../../components/certificationCard/CertificationCard';

export default function Certifications({ burgerActive }) {
  return (
    <section className={burgerActive ? 'scroll-burger' : ''} id='certs'>
      <h1 className='cert-header-title'>Certifications</h1>
      <div className='cert-text-div'>
        {certifications.certifications.map((cert) => {
          return <CertificationCard key={cert.title} certificate={cert} />;
        })}
      </div>
    </section>
  );
}
