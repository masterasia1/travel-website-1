import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css'


function HeroSection() {
  return (
    <div className='hero-container'> 
     <video src='/videos/video.mp4' autoPlay loop muted />
        <h1> A NEW LIFE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Start Now</Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Look What You Can Do <i className='fa-play-circle' /></Button>


        </div>
        

    </div>
  )
}

export default HeroSection