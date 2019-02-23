import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar'
import Cart from '../Cart/Cart'
import logo from '../../images/logo/logo.png'

function LoginRegisterLinks(){
    return (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <a href="#register" className="nav-link">Register</a>
            </li>
            <li className='nav-item'>
                <a href="#register" className="nav-link">Login</a>
            </li>
        </ul>
    )
}

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            isAuthenticated: false,
            user: {
                name: 'Byarent user',
                username: 'byarentuser',
                avatar: 'https://gravatar.com/avatar/60c51a05870d5d3d0ef3bd6d92c7f69a?s=200&r=pg&d=mm'
            }
        }
    }

    onLogoutClick = () => {
        console.log('logout user')
    }
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow-sm'>
                <div className='container'>
                    <img src={logo} alt='logo' style={{ height: '40px', width: '40px' }} />
                    <div className="d-flex">
                        <Cart />
                        {this.state.isAuthenticated ? <div style={{ borderLeft: '0.5px solid white', height: '40px' }}></div> : null}
                        {/* <div style={{ borderLeft: '0.5px solid white', height: '40px' }}></div> */}
                        {this.state.isAuthenticated ? <Avatar onLogoutClick={this.onLogoutClick} isAuthenticated={this.state.isAuthenticated} user={this.state.user} /> : <LoginRegisterLinks />}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar