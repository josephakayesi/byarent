import React, { Component } from 'react'
import cart from '../../images/cart/cart.png'
import './Cart.css'

const TableRow = ({ row, openHouseDetails, removeHouseFromCart }) => (
    <tr>
        <th scope="row" onClick={openHouseDetails}>
            <img class="" src={row.image} style={{ objectFit: 'none', objectPosition: 'center', width: '100%', maxHeight: '500px', marginBottom: '1rem' }} alt="home" />
        </th>
        <td onClick={openHouseDetails}>{row.quote}<small id="admin" className="form-text text-muted">{row.name}</small></td>
        <td><i className="fa fa-close" onClick={removeHouseFromCart}></i></td>
    </tr>
)

const Table = ({ data, openHouseDetails, removeHouseFromCart }) => (
    <table className="table table-hover">
        <thead>
            <tr className="table-active">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) =>
                <TableRow key={index} row={row} openHouseDetails={() => openHouseDetails(row, index)} removeHouseFromCart={() => removeHouseFromCart(row, index)} />
            )}
        </tbody>
    </table>
)



class Cart extends Component {
    constructor() {
        super()

        this.state = {
            isCartOpen: false,
            cartItems: [
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
                    name: '5 bedroom apartment',
                    description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                }
            ]
        }
    }


    toggleCartOpenOrClose = () => {
        this.setState({ isCartOpen: !this.state.isCartOpen })
    }

    openHouseDetails = () => {
        console.log('Open details')
    }

    removeHouseFromCart = () => {
        console.log('Remove house from cart')
    }

    render() {
        const showOrHideCartDropdown = this.state.isCartOpen ? 'dropdown-menu dropdown-menu-center d-block' : 'dropdown-menu dropdown-menu-center d-none'
        return (
            <div className='dropdown show d-flex center pr-4 pull-left' >
                <img className='dropdown-toggle' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' onClick={this.toggleCartOpenOrClose} style={{ height: '40px', width: '40px', verticalAlign: 'middle' }} src={cart} alt='cart' />
                <div className={showOrHideCartDropdown} aria-labelledby='dropdownMenuLink'>
                    {/* <a className='dropdown-item adminDetails' href='#admin'>Cart</a>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#settings'>Settings</a>
                    <div className='dropdown-divider'></div> */}
                    <div style={{width: '100%', display: 'block', clear: 'both', padding: '0px', textAlign: 'inherit', whiteSpace: 'nowrap', backgroundColor: 'transparent', border: '0px' }} href='#logout'><Table
                        data={this.state.cartItems}
                        openHouseDetails={this.openHouseDetails}
                        removeHouseFromCart={this.removeHouseFromCart} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart