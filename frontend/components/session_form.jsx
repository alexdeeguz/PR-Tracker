import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateName = this.updateName.bind(this)
        this.updateHeight = this.updateHeight.bind(this)
        this.updateDOB = this.updateDOB.bind(this)
        this.updateWeight = this.updateWeight.bind(this)
        this.updateBF = this.updateBF.bind(this)
        this.nextForm = this.nextForm.bind(this)
        this.previousForm = this.previousForm.bind(this)
        this.state = {
            username: "",
            password: "",
            name: "",
            height: "",
            weight: "",
            body_fat: "",
            dob: "",
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

    updateHeight(e) {
        this.setState({
            height: e.target.value
        })
    }

    updateWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }

    updateDOB(e) {
        this.setState({
            dob: e.target.value
        })
    }

    updateBF(e) {
        this.setState({
            body_fat: e.target.value
        })
    }

    nextForm(e) {
        e.preventDefault()
        this.setState({
            formFilled: true
        })
    }

    openModal() {
        const modal = $(".modal-container")
        modal.removeClass('hidden')
        modal.addClass('show')
    }

    previousForm() {
        this.setState({
            formFilled: false
        })
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        console.log(this.props)
        this.openModal()
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            height: this.state.height,
            body_fat_percentage: this.state.body_fat
        }
        if (this.props.formType === 'login') {
            this.props.login(user)
                .then(() => this.props.history.push('/profile'))
        } else if (this.state.formFilled === true && this.props.formType === "sign up") {
            this.props.signup(user)
                .then(() => this.props.history.push('/profile'))
        }
    }
    

    render() {
        // debugger
        if (this.props.formType === 'login' || (this.props.formType === 'sign up' && !this.state.formFilled)) {
            return (
                <div className="session-form">
                    <h1>{this.props.formType.toUpperCase()}</h1>
                    <form>
                            <input type="text" onChange={this.updateUsername} value={this.state.username} placeholder="Username"/>
                        <br/>
                            <input type="password" onChange={this.updatePassword} value={this.state.password} placeholder="Password"/>
                        <br/>
            {this.props.formType === 'sign up' && !this.state.formFilled ? <button id="button" onClick={this.nextForm}>NEXT</button> : <button id="button" onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</button>}
                    </form>
                    <p className="errors">{this.props.errors.join(". ")}</p>
                </div>
            )
        } else {
            return (
                <div className="session-form-general">
                    <h1>GENERAL INFORMATION</h1>
                    <form>
                        <input id="input" type="text" onChange={this.updateName} value={this.state.name} placeholder="Name"/>
                        <input id="input" type="date" placeholder="DOB: " onChange={this.updateDOB}/>
                        <div className="height-weight">
                            <input onChange={this.updateHeight} type="number" placeholder="Height(in) " step="1"/>
                            <input onChange={this.updateWeight} type="number" placeholder="Weight(lbs) " step="0.1"/>
                        </div>
                        <input onChange={this.updateBF} id="input" type="number" placeholder="Body Fat % "step="0.1"/>
                        <button id="button" type="submit" onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</button>
                        <p onClick={this.previousForm}>back</p>
                    </form>
                    <p className="errors">{this.props.errors.join(". ")}</p>
                </div>
            )
        }
    }
}

export default SessionForm