import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.state = {
            username: "",
            password: ""
        }
    }

    updateUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.props.formType === 'login') {
            this.props.login(this.state)
                .then(() => this.props.history.push('/'))
        } else {
            this.props.signup(this.state)
                .then(() => this.props.history.push('/'))
        }
    }
    

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input type="text" onChange={this.updateUsername} value={this.state.username}/>
                    </label>
                    <label>Password
                        <input type="text" onChange={this.updatePassword} value={this.state.password}/>
                    </label>
                    <button type="submit">{this.props.formType.toUpperCase()}</button>
                </form>
                {this.props.formType === "sign up" ? <Link to="/login">Log in</Link> : <Link to="/signup">Sign up</Link>} 
            </div>
        )
    }
}

export default SessionForm