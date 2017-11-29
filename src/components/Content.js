import React, { Component } from 'react';
import './Content.css'
import pinball from '../assets/img/flipperstavernpreview.jpg';
class Content extends Component {
  render() {
    return (
      <div className='wrapper'>

      <div className='page-section'>
        <div className='wrapper'>
          <div className='conent'>
            <div className='food'>
            <img src={pinball} className='foodmenu'/>
          </div>
            <div className='conentheader'>
              <h3><span className='contentheader'>Appetizers</span></h3>
            </div>
              <div className='content-details'>
                <ul>
                <li>
                  <div className='meal'>
                    <p>Flipper Chips </p>
                      <span className='info'> cheddar, queso, black beans, lettuce pico</span>
                  </div>
                </li>
                <li>
                  <div className='meal'>
                    <p>Crawdaddy Queso and Chips </p>
                      <span className='info'>Crawfish fondue with bacon and scallions</span>
                    </div>
                </li>
                <li>
                  <div className='meal'>
                    <p>Pretzels </p>
                      <span className='info'>(3) Bavarian pretzels, comes with homeade 90 Schilling sautéed onion queso</span>

                  </div>
                </li>
                <li>
                  <div className='meal'>
                    <p> Spicy Black Bean Salsa</p>
                      <span className='info'>Black beans, bell peppers, shoe peg corn, bell peppers, jalapenos, tomatoes, onions, cilantro, habaneros, serrano's, and seasoning</span>

                  </div>
                </li>
                <li>
                  <div className='meal'>
                    <p>SouthWest Quesadilla</p>
                      <span className='info'>Pulled Pork, bbq sauce, 3 cheese blend and green chili's</span>
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
              <h3><span className='contentheader'>Signature Dogs</span></h3>
              </div>
                <div className='content-details'>
                  <ul>
                    <li>
                      <div className='meal'>
                        <p>Cubano</p>
                        <span className='info'>Pulled pork, tomatoe relish, cabage, swiss cheese & dijonaise</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Flipper Style</p>
                        <span className='info'>Avocado,pickled ginger, cucumber, lettuce & cusabi</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Thai-Breaker</p>
                        <span className='info'>Thai-curry coconut brat, lettuce, pickled veggies, grilled shrimp, home made sriracha peanut sauce, cilantro and spicy peanuts</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Sourpuss</p>
                        <span className='info'>sauerkraut, queso fresco, pickle spear, topped with sea salt and vinegar chips</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Bon Temp</p>
                        <span className='info'>Crawfish fondue, red peppers, crispy onion strips and lemon garlic aoli</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Philthy Wizard</p>
                        <span className='info'>Thinly sliced ribeye, bell peppers, onions, & out home made 90 Schilling beer queso</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Jerk It</p>
                        <span className='info'>Peppered bacon, shredded cabbage, Jamaican seasoned onion & pinneapple topped with spicy mango chutney</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>S.O.B</p>
                        <span className='info'>Beef tamale, queso, pico & sour cream</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Pile Driver</p>
                        <span className='info'>chili, 90 Schilling beer queso, fritos, more chili, cheddar cheese, grilled onions & mustard</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Tilted Ruben</p>
                        <span className='info'>Corned beef, pastrami, swiss cheese, sauerkraut, homeade russian sauce served w/ rye bread</span>
                      </div>
                    </li>
                    <li>
                      <div className='meal'>
                        <p>Shrimp Tacos</p>
                        <span className='info'>(3) to an order corn tortillas, honey habanero mustard, shredded cabbage, tomato relish, queso fresco, tri colored chpis, & side of pico</span>
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
                          <h3><span className='contentheader'>Protein Selection</span></h3>
                        </div>
                          <div className='content-details'>
                            <ul>
                              <li>
                                <div className='protein'>
                                  <p>Smoked Elk</p>
                                </div>
                              </li>
                              <li>
                                <div className='protein'>
                                  <p>Thai Curry Coconut</p>
                                </div>
                              </li>
                              <li>
                                <div className='protein'>
                                  <p>Italian</p>
                                </div>
                              </li>
                              <li>
                                <div className='protein'>
                                  <p>German Sausage</p>
                                </div>
                              </li>
                              <li>
                                <div className='protein'>
                                  <p>Garlic and Pepperjack</p>
                                </div>
                              </li>
                              <li>
                                <div className='protein'>
                                  <p>Green Chile</p>
                                </div>
                              </li>
                              <li>
                                <div className='protein'>
                                  <p>Italian</p>
                                </div>
                              </li><li>
                                <div className='protein'>
                                  <p>All Beef Hot Dog</p>
                                </div>
                              </li><li>
                                <div className='protein'>
                                  <p>Vegan Chipolte</p>
                                </div>
                              </li><li>
                                <div className='protein'>
                                  <p>Vegan Furter</p>
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

export default Content;
