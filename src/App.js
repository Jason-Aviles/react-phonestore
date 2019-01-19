import React, { Component } from 'react'; 
import {Switch, Route} from 'react-router-dom'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ProductList from './components/ProductList/ProductList'
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart'
import Page400 from './components/Page400/Page400'
import Modal from './components/Modal/Modal'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <NavBar />
          <Switch>
           <Route exact path='/' component={ProductList} />
           <Route path='/details' component={Details} />
           <Route path='/cart' component={Cart} />
           <Route component={Page400} />
          </Switch>
          <Modal />
        </React.Fragment>
    );
  }
}

export default App;
