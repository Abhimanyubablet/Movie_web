import React from 'react'
import Navbar from './Navbar.js';
import Banner from './Banner';
import Service from './Service';
import Top from './Top';
import Tv from './Tv';
import Footer from './Footer';
import Upcoming from './Upcoming';

export default function Home() {
  return (
    <div>
     <Navbar/>
    <Banner/>
    <Upcoming/>
    <Service/>
    <Top/>
    <Tv/>
    <Footer/>
    {/* <h3>fkasjdf</h3> */}
    </div>
  )
}
