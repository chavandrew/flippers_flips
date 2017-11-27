import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import bar from './assets/img/flipperstavernbar.png'

import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
    <Router>
        <div>
          <h1>Flippers Tavern</h1>
          <nav className='tabs'>
            <NavLink  className='link' exact to='/'>Home</NavLink>{' '}
            <NavLink className='link' to='/menu'>Menu</NavLink>{' '}
            <NavLink className='link' to='/about'>About</NavLink>{' '}
          </nav>
          <img  className='image'src={bar} />
          <Helmet>
               <style>{'body { background-color: black; }'}</style>
           </Helmet>
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
);


  }
}

export default App;
