import React, { Component } from 'react';
import bar from '../assets/img/lbktx.jpg'
import './Drinks.css'




class Drinks extends Component {
  render() {
    return (
      <div className='wrapper'>
          <div className='flexbar'>
        <div className='barimg'>
        <img src={bar} className='imgbar'/>
        </div>
        <div className='page-section'>
            <div className='wrapper'>
              <div className='conent'>
                <div className='conentheader'>
                  <h3>Taps</h3>
                </div>
              </div>
                  <div className='content-details'>
                    <ul>
                      <li>
                        <div className='drinks'>
                          <p>we change our beer selection weekly-we have something for everyone <span className='beertype'> pale ales, stouts, nitros, ciders, i.p.a's, reds, bocks, blondes, hefs, </span>..home of the $2 pint of PBR! stop on in and you'll never know what you'll get! </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        <div className='page-section'>
            <div className='wrapper'>
              <div className='conent'>
                <div className='conentheader'>
                  <h3>Specialty Drinks</h3>
                </div>
                  <div className='content-details'>
                    <ul>
                      <li>
                        <div className='drinks'>
                          <p>we have a wide variey of cocktails and liquor selections <span className='beertype'> mules, old-fashions, martinis, ritas & house special cocktails </span> we've got the goodies! </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        <div className='page-section'>
            <div className='wrapper'>
              <div className='conent'>
                <div className='conentheader'>
                  <h3>Drink and Pinball--who could ask for more!</h3>
                </div>
                  <div className='content-details'>
                    <ul>
                      <li>
                        <div className='drinks'>
                          <p> <span className='beertype'> all ages! bring your four legged friends! bring your kids! bring your smile! </span>  </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
      </div>
  );
  }
}

export default Drinks;
