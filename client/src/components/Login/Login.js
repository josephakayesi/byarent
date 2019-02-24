import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            usernameOrEmail: '',
            password: '',
        }
    }

    onInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        const adminData = {
            usernameOrEmail: this.state.usernameOrEmail,
            password: this.state.password
        }

        console.log(adminData)
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mx-auto bg-light mt-5 p-5 rounded'>
                            <form>
                                <fieldset>
                                    <legend className='display-4 pb-4'>Login</legend>
                                    <div className='form-group'>
                                        <label htmlFor='usernameOrEmail'>Username or Email</label>
                                        <input type='text' className='form-control' id='usernameOrEmail' placeholder='Enter username or email' onChange={this.onInputChange} defaultValue={this.state.usernameOrEmail} />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='password'>Password</label>
                                        <input type='password' className='form-control' id='password' placeholder='Password' onChange={this.onInputChange} defaultValue={this.state.password} />
                                    </div>
                                    <button type='submit' className='btn btn-primary' onClick={this.onFormSubmit}>Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login