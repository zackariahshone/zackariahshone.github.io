/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import HomeSection from '../../components/Homesection';
import Certs from '../../components/Certs';
import Background from '../../components/BackGround';
import Projects from '../../components/Projects';
import Nav from '../../components/NavScroll';
import Contact from '../../components/Contact';
export default function HomePage() {
  return (
    <div>
      <Nav />
      <HomeSection />
      <Background />
      <Projects />
      <Certs />
      <Contact />
    </div>
  );
}
