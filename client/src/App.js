import React, { Component } from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Route } from "react-router-dom"
import Admin from './components/Admin/Admin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
