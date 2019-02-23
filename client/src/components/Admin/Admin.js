import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Dashboard from './Dashboard/Dashboard'
import Entry from './Entry/Entry'

class Admin extends Component {
    constructor() {
        super()

        this.state = {
            isAdminAuthenticated: false,
            usernameOrEmail: '',
            password: ''
        }
    }

    render() {
        const isAuthenticated = this.state.isAdminAuthenticated
        return (
            <BrowserRouter>
                <div>
                    <Navbar isAuthenticated={isAuthenticated} />
                    <div className='container'>
                        <Route exact path='/admin' render={() => isAuthenticated ? (<Redirect to='/admin/dashboard' />) : (<Entry />)} />
                        <Route exact path='/admin/dashboard' render={() => isAuthenticated ? (<Dashboard />) : (<Redirect to='/admin' />)} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Admin