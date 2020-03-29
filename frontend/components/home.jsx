import React from 'react'
import LoginContainer from './containers/login_container'
import SignUpContainer from './containers/signup_container'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)

        this.state = {
            formType: 'login'
        }
    }

    logout(e) {
        e.preventDefault()
        this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    closeModal(e) {
        e.preventDefault()
        const modal = $(".modal-container")
        modal.removeClass("show")
        modal.addClass("hidden")
    }

    openModal(e) {
        e.preventDefault()
        const modal = $(".modal-container")
        modal.removeClass('hidden')
        modal.addClass('show')
    }

    render() {
        return (
            <div className="home-container">
                <div id="space"></div>
                <div className="general">
                    <h1 id="title">PERSONAL RECORD TRACKER</h1>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/alex-de-guzman/"><img className="icon" src={window.linkedinURL} /></a>
                        <a href="https://github.com/alexdeeguz/PR-Tracker"><img className="icon" src={window.githubURL} /></a>
                    </div>
                    <p>Join now to keep track of personal records and body composition logs to reach your fitness goals!</p>
                    <button onClick={this.openModal}>LOGIN OR SIGNUP</button>
                    <p>Learn More</p>
                    <p>↓↓↓</p>
                </div>
                <div className="app-info">
                    <div>
                        <div className="feature-info">
                            <h1>Strength Tracker</h1>
                            <p>Keep track of both your absolute strength and relative strength by logging your 1 rep max and rep max personal records</p>
                        </div>
                        <div className="feature-info">
                            <h1>Body Composition Tracker</h1>
                            <p>Keep track of your body composition. The body composition log will tell you how much lean mass, fat mass, and total bodyweight you gain and lose since the last log</p>
                        </div>
                        <div className="feature-info">
                            <h1>Training Logs</h1>
                            <p>Log training data to see how you progress throughout time</p>
                        </div>
                        <div className="feature-info">
                            <h1>Fitness Assessments</h1>
                            <p>The application will take all the logged data to calculate your fitness levels for muscular strength, muscular endurance, and cardiovascular fitness</p>
                        </div>
                    </div>
                </div>

                <div className="modal-container hidden" onClick={this.closeModal}>
                    <div className="modal">
                    </div>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span onClick={this.closeModal} className="close">&times;</span>
                        {this.state.formType === 'login' ? <LoginContainer history={this.props.history} /> : <SignUpContainer history={this.props.history}/>}
                        {this.state.formType === 'login' ? <p>Don't have an account? <p onClick={() => this.setState({formType: 'signup'})}>Sign up</p></p> : <p>Already have an account? <p onClick={() => this.setState({formType: 'login'})}>Log in</p></p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
