import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1 className="display-4">Contact Component</h1>
                </div>
            </div>
        )
    }
}

export default Contact