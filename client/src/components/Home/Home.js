import React, { Component } from 'react'
import HouseList from '../HouseList/HouseList'

class Home extends Component {
    constructor() {
        super()

        this.state = {
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
            cartItems: []
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

        // this.calculateTotal()
    }

    calculateTotal = () => {
        let total = 0
        this.state.cartItems.forEach(item => {
            total += item.price
        })
        console.log(total)
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className='d-flex mt-1 pt-3'>
                        <HouseList houses={this.state.houses} addItemToCart={this.props.addItemToCart} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
