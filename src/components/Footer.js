import React, { Component } from 'react';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footwrap'>

    <a href="https://www.instagram.com/flippers_tavern/"><img src={insta} className='insta'/></a>
      <a href="https://www.facebook.com/flipperstavern/"><img src={facebook} className='fb'/></a>


     </div>

  );
  }
}

export default Footer;
