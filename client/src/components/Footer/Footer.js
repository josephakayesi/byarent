import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-dark text-white p-3 text-center">
                Copyright &copy; {new Date().getFullYear()} Byarent
            </footer>
        )
    }
}

export default Footer