import React, { Component } from 'react'
import cart from '../../images/cart/cart.png'

class Cart extends Component {
    render() {
        return (
            <div className='dropdown show d-flex pr-4' >
                <img className='dropdown-toggle' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' style={{ height: '40px', width: '40px', verticalAlign: 'middle' }} src={cart} alt='cart'/>
                <div className='dropdown-menu dropdown-menu-center' aria-labelledby='dropdownMenuLink'>
                    <a className='dropdown-item adminDetails' href='#admin'>Cart</a>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#settings'>Settings</a>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#logout'>Logout</a>
                </div>
            </div>
        )
    }
}

export default Cart