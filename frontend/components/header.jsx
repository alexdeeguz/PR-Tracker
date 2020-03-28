import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(e) {
        e.preventDefault()
        this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    render() {
        return (
            <div>
                <button onClick={this.logout}>Log out</button>
            </div>
        )
    }
}

export default Header