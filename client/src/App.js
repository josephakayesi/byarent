import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ForRent from './components/ForRent/ForRent'
import ForSale from './components/ForSale/ForSale'
import Contact from './components/Contact/Contact'
import Favourite from './components/Favourite/Favourite'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/forrent' component={ForRent} />
          <Route exact path='/forsale' component={ForSale} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/favourite' component={Favourite} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
        <Route exact path='/admin' component={Admin} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
