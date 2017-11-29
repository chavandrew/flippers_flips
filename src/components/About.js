import React, { Component } from 'react';
import welcome from '../assets/img/welcome.jpg';
import pinball from '../assets/img/ballpin.png';
import './About.css'




class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-img'>
          <div className='pinimg'>
            <img src={pinball} className='imgpin' />
          </div>
          <div className='abin'>
            <h2>About</h2>
          </div>
        </div>
      <div className='aboutinfo'>
        <span className='lbk'>
          Lubbock's only pinball tavern! We have a patio that loves dogs, please bring your fury companion and we'll have water and a complimentary all beef hotdog waiting for em! We are all ages! Our environment is very relaxed and family friendly. We also are a NON SMOKING establishment! (though we don't discriminate!) We have a place right outside the patio for you smokers (yes that includes you too, you VAPERS)! Flippers isn't your typical Lubbock spot. Locally owned since 2015 we strive on providing an atmosphere that is enjoyable and satisfying. Serving a wide variety of cocktails, a draft menu that changes weekly, and brats like you've never seen or tasted, we've got options for days--come find out for yourself! Service and quality are at the forefront of our establishment.
        </span>
      </div>
    </div>

  );
  }
}

export default About;
