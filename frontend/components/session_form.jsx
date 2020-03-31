import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateName = this.updateName.bind(this)
        this.nextForm = this.nextForm.bind(this)
        this.state = {
            username: "",
            password: "",
            formFilled: false
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

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    nextForm() {
        this.setState({
            formFilled: true
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        if (this.props.formType === 'login') {
            this.props.login(user)
                .then(() => this.props.history.push('/profile'))
        } else if (this.state.formFilled === true) {
            this.props.signup(user)
                .then(() => this.props.history.push('/profile'))
        }
    }
    

    render() {
        if (this.props.formType === 'login' || (this.props.formType === 'sign up' && !this.state.formFilled)) {
            return (
                <div className="session-form">
                    <h1>{this.props.formType.toUpperCase()}</h1>
                    <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.updateUsername} value={this.state.username} placeholder="Username"/>
                        <br/>
                            <input type="password" onChange={this.updatePassword} value={this.state.password} placeholder="Password"/>
                        <br/>
            {this.props.formType === 'sign up' && !this.state.formFilled ? <button id="button" onClick={this.nextForm}>NEXT</button> : <button id="button" type="submit">{this.props.formType.toUpperCase()}</button>}
                    </form>
                    <p className="errors">{this.props.errors.join(". ")}</p>
                </div>
            )
        } else {
            return (
                <div className="session-form-general">
                    <h1>GENERAL INFORMATION</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input id="input" type="text" onChange={this.updateName} value={this.state.name} placeholder="Name"/>
                        <input id="input" type="date" placeholder="DOB: "/>
                        <div className="height-weight">
                            <input type="number" placeholder="Height(in) " step="1"/>
                            <input type="number" placeholder="Weight(lbs) " step="0.1"/>
                        </div>
                        <input id="input" type="number" placeholder="Body Fat % "step="0.1"/>
                        <button id="button" type="submit">{this.props.formType.toUpperCase()}</button>
                    </form>
                    <p className="errors">{this.props.errors.join(". ")}</p>
                </div>
            )
        }
    }
}

export default SessionForm