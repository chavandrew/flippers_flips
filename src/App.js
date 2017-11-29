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
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Content from './components/Content';
import Drinks from './components/Drinks'


class App extends Component {
  render() {
    return (
      <div>
  <Header />
    <Router>
        <div>
          <nav className='tabs'>
            <NavLink className='link' exact to='/'></NavLink>{'  '}
            <NavLink className='link' to='/home'>Home</NavLink>{'  '}
            <NavLink className='link' to='/menu'>Menu</NavLink>{'  '}
            <NavLink className='link' to='/drinks'>Drinks</NavLink>{'  '}
            <NavLink className='link' to='/about'>About</NavLink>{'  '}
          </nav>
          <Helmet>
              <style>{'body { background-color: #EDE7D9; }'}</style>
           </Helmet>
          <Switch >

            <Route path="/home" component={Home} />
            <Route path="/menu" component={Content} />
            <Route path="/drinks" component={Drinks} />
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
