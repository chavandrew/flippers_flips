import React, { Component } from 'react';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footwrap'>
        <div className='bar-info'>
          <h2>1406 Ave Q Lubbock, TX 79412</h2>
          <a href="https://www.instagram.com/flippers_tavern/" target='_blank'><img src={insta} className='insta'/></a>
          <a href="https://www.facebook.com/flipperstavern/" target='_blank'><img src={facebook} className='fb'/></a>
        </div>
     </div>
  );
  }
}

export default Footer;
