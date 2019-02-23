import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'

class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            isAuthenticated: false,
            user: {
                name: 'Byarent Admin',
                username: 'byarentadmin',
                avatar: 'https://res.cloudinary.com/topazchurch/image/upload/v1533814738/images_6.png'
            }
        }
    }
    render() {
        const isAuthenticated = this.props.isAuthenticated
        const user = this.state.user

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded">
                <div className="container">
                    <a className="navbar-brand" href="#navbrand">Admin</a>
                    {isAuthenticated ? <Avatar onLogoutClick={this.onLogoutClick} isAuthenticated={isAuthenticated} user={user} /> : null}
                </div>
            </nav>
        )
    }
}

export default Navbar