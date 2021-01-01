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
import WhoToBe from '../../components/WhoToBe';
import Nav from '../../components/NavScroll';
export default function HomePage() {
  return (
    <div>
      <Nav />
      <HomeSection />
      <Background />
      <WhoToBe />
      <Certs />
    </div>
  );
}
