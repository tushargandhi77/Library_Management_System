import React from 'react';
import ContactUs from '../components/ContactUs';
import CarouselFade from '../components/CarousalFade';

export default function Contactus() {
  return (
    <>
      <div className="row g-0">
        <div className='col-md-6 mt-5'>
          <CarouselFade />
        </div>
        <div className='col-md-6 bg bg-dark-blue'>
          <ContactUs />
        </div>
      </div>
      </>
  )
}
    