import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import bar from './assets/img/flipperstavernbar.png';
import dog from './assets/img/doghot.png'

import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div>
  <Header />
    <Router>
        <div>

          <nav className='tabs'>
            <NavLink  className='link' exact to='/'></NavLink>{' '}
            <NavLink className='link' to='/home'>Home</NavLink>{' '}
            <NavLink className='link' to='/menu'>Menu</NavLink>{' '}
            <NavLink className='link' to='/about'>About</NavLink>{' '}
            <NavLink className='link' to='/content'>Content</NavLink>{' '}
          </nav>

          <Helmet>
               <style>{'body { background-color: black; }'}</style>
           </Helmet>
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/content" component={Content} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
);


  }
}

export default App;
