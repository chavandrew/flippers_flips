import React, { Component } from 'react';
import './Home.css';
import bar from '../assets/img/ballpin.jpg';


class Home extends Component {
  render() {
    return (

      <div className='img'>
        <img src={bar} className='imghome'/>
      </div>
  );
  }
}

export default Home;
