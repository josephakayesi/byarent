import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class ForSale extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1 className="display-4">ForSale Component</h1>
                </div>
            </div>
        )
    }
}

export default ForSale