import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import Cart from '../Cart/Cart'
import logo from '../../images/logo/logo.png'

function AuthenticationLinks() {
    return (
        <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
                <Link to='/register' className="nav-link">Register</Link>
            </li>
            <li className='nav-item'>
                <Link to='/login' className="nav-link">Login</Link>
            </li>
        </ul>
    )
}

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            isAuthenticated: true,
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
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link to="/" class="nav-link">&nbsp; Home &nbsp;</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/forrent' class="nav-link">&nbsp; For Rent &nbsp;</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/forsale' class="nav-link">&nbsp; For Sale &nbsp;</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link">&nbsp; Contact &nbsp;</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/favourite" class="nav-link">&nbsp; Favourite &nbsp;</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <Cart />
                        {this.state.isAuthenticated ? <div style={{ borderLeft: '0.09rem solid white', height: '40px' }}></div> : null}
                        {/* <div style={{ borderLeft: '0.5px solid white', height: '40px' }}></div> */}
                        {this.state.isAuthenticated ? <Avatar onLogoutClick={this.onLogoutClick} isAuthenticated={this.state.isAuthenticated} user={this.state.user} /> : <AuthenticationLinks />}
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar