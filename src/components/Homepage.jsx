import React from 'react';
import homepage from '../assets/Image/homepag.png'

const Homepage = () => {
  return (
    <>
    <div className='main-section'> 
    <div className='left-display'>
        <h1 >
        Welcome to QuickEats!
        </h1>
        <h3>Whether it’s lunch, dinner, or a midnight snack, we’ve got you covered!</h3>
    </div>
    <div className='right-display'>
        <img src={homepage} alt="delivery boy"/>
    </div>
      
    </div>
    
    </>
  )
}

export default Homepage
