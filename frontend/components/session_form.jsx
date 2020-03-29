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

    componentWillUnmount() {
        this.props.removeErrors()
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
                .then(() => this.props.history.push('/profile'))
        } else {
            this.props.signup(this.state)
                .then(() => this.props.history.push('/profile'))
        }
    }
    

    render() {
        return (
            <div className="session-form">
                <h1>{this.props.formType.toUpperCase()}</h1>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.updateUsername} value={this.state.username} placeholder="Username"/>
                    <br/>
                        <input type="password" onChange={this.updatePassword} value={this.state.password} placeholder="Password"/>
                    <br/>
                    <button id="button" type="submit">{this.props.formType.toUpperCase()}</button>
                </form>
                <p className="errors">{this.props.errors.join(". ")}</p>
            </div>
        )
    }
}

export default SessionForm