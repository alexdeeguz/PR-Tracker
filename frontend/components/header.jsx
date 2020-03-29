import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        e.preventDefault()
        this.props.logout()
            .then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <div className="header">
                <div className="nav-links">
                    <p><Link className="links" to="/profile">STATS</Link></p>
                    <p><Link className="links" to="/profile/records">PERSONAL RECORDS</Link></p>
                    <p><Link className="links" to="/profile/weightlogs">BODY COMPOSITION</Link></p>
                </div>
                <p onClick={this.logout}>Sign Out</p>
            </div>
        )
    }
}

export default Header