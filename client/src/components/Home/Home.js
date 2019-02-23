import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="display-4">Byarent</h1>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Home;
