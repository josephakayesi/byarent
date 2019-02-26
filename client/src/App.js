import React, { Component } from 'react'
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import Landing from './components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Landing} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
