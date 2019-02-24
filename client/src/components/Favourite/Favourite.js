import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class Favourite extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1 className="display-4">Favourite Component</h1>
                </div>
            </div>
        )
    }
}

export default Favourite