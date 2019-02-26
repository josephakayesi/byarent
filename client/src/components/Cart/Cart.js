import React, { Component } from 'react'
import cart from '../../images/cart/cart.png'
import './Cart.css'

const TableRow = ({ row, openHouseDetails, removeHouseFromCart }) => (
    <tr>
        <td scope="row" onClick={openHouseDetails}>
            <img class="dropdown-toggle rounded" src={row.image} style={{ objectFit: 'none', objectPosition: 'center', width: '40px', height: '40px', marginBottom: '1rem' }} alt="home" />
        </td>
        <td onClick={openHouseDetails}>{row.name}<small id="admin" className="form-text text-muted" style={{ color: '#D46A6A' }}><sup>&#8373;</sup>{row.price.toLocaleString()}</small></td>
        <td><i className="fa fa-close" onClick={removeHouseFromCart}></i></td>
    </tr>
)

const Table = ({ data, total, openHouseDetails, removeHouseFromCart }) => (
    <table className="table table-hover">
        {/* <thead>
            <tr className="table-active">
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead> */}
        <tbody>
            {data.map((row, index) =>
                <TableRow key={index} row={row} openHouseDetails={() => openHouseDetails(row, index)} removeHouseFromCart={() => removeHouseFromCart(row, index)} />
            )}
            <tr>
                <td scope="row">TOTAL</td>
                <td style={{ color: '#D46A6A' }}><span>$ </span>{total}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
)



class Cart extends Component {
    constructor() {
        super()

        this.state = {
            isCartOpen: false,
            total: 0,
            cartItems: [
                // {
                //     name: '1 bedroom apartment',
                //     description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
                //     price: 250000,
                //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                // },
                // {
                //     name: '2 bedroom apartment',
                //     description: 'A 2 bedroom apartment with fully furnished interiror available on demand. Even more description. I guess you will go to the next line.',
                //     price: 270000,
                //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                // },
                // {
                //     name: '5 bedroom apartment',
                //     description: 'A 2 bedroom apartment with fully furnished interiror available on demand',
                //     price: 300000,
                //     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vasskertentrance.jpg/440px-Vasskertentrance.jpg'
                // }
            ]
        }
    }

    calculateCartItemsTotalPrice = () => {
        let total = 0
        this.state.cartItems.forEach(item => {
            total += item.price
        })

        this.setState({ total: total })
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

    proceedToCheckout = () => {
        console.log('Proceed to checkout')
    }

    componentWillReceiveProps(){
        console.log('received')
        console.log(this.props.cartItems)
        this.setState({cartItems: this.props.cartItems})

    }
    render() {
        const showOrHideCartDropdown = this.state.isCartOpen ? 'dropdown-menu dropdown-menu-center d-block' : 'dropdown-menu dropdown-menu-center d-none'
        return (
            <div className='dropdown show d-flex center pr-4 pull-left'>
                <img className='dropdown-toggle' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' onClick={this.toggleCartOpenOrClose} style={{ height: '40px', width: '40px', verticalAlign: 'middle' }} src={cart} alt='cart' />
                <div className={showOrHideCartDropdown} style={{ padding: '0px' }} aria-labelledby='dropdownMenuLink'>
                    {/* <a className='dropdown-item adminDetails' href='#admin'>Cart</a>
                    <div className='dropdown-divider'></div>
                    <a className='dropdown-item' href='#settings'>Settings</a>
                    <div className='dropdown-divider'></div> */}
                    <div style={{ width: '100%', display: 'block', clear: 'both', padding: '0px 0px 0px 0px', textAlign: 'inherit', whiteSpace: 'nowrap', backgroundColor: 'transparent', border: '0px' }} href='#logout'>
                        <Table
                            data={this.state.cartItems}
                            openHouseDetails={this.openHouseDetails}
                            removeHouseFromCart={this.removeHouseFromCart}
                            total={this.state.total}>

                        </Table>
                    </div>
                    {/* <href='#settings'>Proceed to Checkout <i className="fa fa-close"></i></a> */}
                    <a href="#addtocart" className="btn" onClick={this.proceedToCheckout} style={{ color: 'white', borderColor: '#D46A6A', backgroundColor: '#D46A6A', width: '100%', height: '100%' }}>Proceed to checkout</a>
                </div>
            </div>
        )
    }
}

export default Cart