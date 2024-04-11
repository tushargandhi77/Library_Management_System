import React from 'react'
import {Link} from 'react-router-dom'
const Coin = ({ left }) => (
    <div className="coin" style={{ left: left }}></div>
  );
  
  const ConfirmationContainer = () => (
    <div className="confirmation-container">
      <div className="tick-symbol">&#10004;</div>
      <p className='plced-plced-djehdjd'>Order Placed Successfully</p>
      <Link to='/main' className='dhdhjdhfdlfjdjlfljdo'>Go to Home</Link>
    </div>
  );
export default function PlacedOrder() {
  return (
    <div className='main-main-body-body'>
    <div className="coins-container">
      <Coin left="10%" />
      <Coin left="20%" />
      <Coin left="30%" />
      <Coin left="50%" />
      <Coin left="80%" />
      <Coin left="30%" />
      <Coin left="65%" />
      <Coin left="15%" />
      <Coin left="25%" />
      <Coin left="25%" />
      <Coin left="95%" />
      <Coin left="85%" />
      <Coin left="75%" />
      <Coin left="70%" />
    </div>
    <ConfirmationContainer />
    </div>
  )
}
