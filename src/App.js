import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
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
            <NavLink className='link' exact to='/'>Home</NavLink>{'  '}
            <NavLink className='link' to='/drinks'>Drinks</NavLink>{'  '}
            <NavLink className='link' to='/menu'>Menu</NavLink>{'  '}
            <NavLink className='link' to='/about'>About</NavLink>{'  '}
          </nav>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/menu" component={Content} />
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
