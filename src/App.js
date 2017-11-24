import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>


    <Router>
        <div>
          <nav className='tabs'>
            <NavLink exact to='/'>Home</NavLink>{' '}
            <NavLink to='/about'>About</NavLink>{' '}
            <NavLink to='/menu'>Menu</NavLink>{' '}
          </nav>
          <Switch>

                    <Route path="/header" component={Header} />
                   <Route path="/menu" component={Menu} />
                    <Route path="/about" component={About} />

                </Switch>


        </div>
      </Router>






</div>
);


  }
}

export default App;
