import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>


    <Router>
        <div>
          <nav className='tabs'>
            <NavLink exact to='/'>Home</NavLink>{' '}
            <NavLink to='/about'>About</NavLink>{' '}
            <NavLink to='/foodmenu'>Food Menu</NavLink>{' '}
          </nav>

        </div>
      </Router>






</div>
);


  }
}

export default App;
