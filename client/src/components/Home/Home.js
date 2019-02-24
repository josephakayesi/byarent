import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import HouseList from '../HouseList/HouseList'
import House from '../House/House'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            houses: [
                {
                    name: '1 bedroom apartment',
                    description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                },
                {
                    name: '2 bedroom apartment',
                    description: 'A 2 bedroom apartment with fully furnished interiror available on demand. Even more description. I guess you will go to the next line.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                },
                {
                    name: '3 bedroom apartment',
                    description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                },
                {
                    name: '4 bedroom apartment',
                    description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                },
                {
                    name: '5 bedroom apartment',
                    description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className='d-flex mt-1 pt-3'>
                        <HouseList houses={this.state.houses} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
