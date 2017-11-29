import React, { Component } from 'react';
import './Home.css';
import bar from '../assets/img/ballpin.png';
import {Helmet} from 'react-helmet';

class Home extends Component {
  render() {
    return (
    
      <div className='img'>
        <img src='https://media.giphy.com/media/xUNda4fiMToGsSimbK/giphy.gif' className='imghome'/>
      </div>

  );
  }
}

export default Home;
