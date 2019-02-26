import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home/Home'
import ForRent from '../ForRent/ForRent'
import ForSale from '../ForSale/ForSale'
import Contact from '../Contact/Contact'
import Favourite from '../Favourite/Favourite'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Navbar from '../Navbar/Navbar'


class Landing extends Component {
  constructor(){
    super()

    this.state = {
      cartItems: [],
      houses: [
        {
            key: 0,
            name: '1 bedroom apartment',
            description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
            price: 150000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
        },
        {
            key: 1,
            name: '2 bedroom apartment',
            description: 'A 2 bedroom apartment with fully furnished interiror available on demand. Even more description. I guess you will go to the next line.',
            price: 200000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
        },
        {
            key: 2,
            name: '3 bedroom apartment',
            description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
            price: 220000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
        },
        {
            key: 3,
            name: '4 bedroom apartment',
            description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
            price: 350000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
        },
        {
            key: 4,
            name: '5 bedroom apartment',
            description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
            price: 250000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
        }
    ],
    }
  }

  addItemToCart = (id) => {
    // console.log(id)
    let newItem = this.state.houses[id]
    // console.log(newItem)
    let previousItems = this.state.cartItems

    let allCartItems = []
    allCartItems.push(...previousItems, newItem)

    this.setState({ cartItems: allCartItems }, () => this.setState({ cartItems: allCartItems }) )

    this.setState(() => ({ cartItems: allCartItems }));
    // console.log(previousItems)

    // this.setState({ cartItems: this.state.cartItems }, () => { this.setState({ cartItems: { ...previousItems, newItem } }) });

    // this.setState((previousState, props) => ({ cartItems: previousState.cartItems }), () => { console.log(this.state.cartItems) })

    // this.setState({ cartItems: this.state.cartItems }, () => this.setState({ cartItems: { ...previousItems, newItem } }))
    // this.setState(() => ({ cartItems: {...previousItems, newItem} }));
    // this.setState({ cartItems: { ...previousItems, ...newItem } })
    console.log(this.state.cartItems)
    console.log('landing')

    // this.calculateTotal()
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar cartItems={this.state.cartItems} />
          <Route exact path='/' render={(props) => <Home {...props} addItemToCart={this.addItemToCart} />} />
          <Route exact path='/forrent' component={ForRent} />
          <Route exact path='/forsale' component={ForSale} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/favourite' component={Favourite} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Landing;
