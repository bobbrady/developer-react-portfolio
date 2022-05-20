import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import About from './containers/about/About';
import Skills from './containers/skills/Skills';
import Contact from './containers/contact/Contact';
import Certifications from './containers/certifications/Certifications';
import Footer from './components/footer/Footer';

const App = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const handleToggleClick = (event) => {
    event.preventDefault();
    setBurgerActive(!burgerActive);
  };
  return (
    <>
      <Navbar
        burgerActive={burgerActive}
        handleToggleClick={handleToggleClick}
      />
      <About />
      <Skills
        burgerActive={burgerActive}
        skillKey='FullStackDev'
        leadSkill={true}
      />
      <Skills burgerActive={burgerActive} skillKey='CloudSolns' />
      <Skills burgerActive={burgerActive} skillKey='DevOps' />
      <Certifications burgerActive={burgerActive} />
      <Contact burgerActive={burgerActive} />
      <Footer />
    </>
  );
};

export default App;
