import React from 'react'

class Home extends React.Component {
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
            <div className="home-container">
                <div id="space"></div>
                <div className="general">
                    <h1 id="title">PERSONAL RECORD TRACKER</h1>
                    <img className="icon" src={window.linkedinURL}/>
                    <img className="icon" src={window.githubURL} />
                    <p>Join now to keep track of personal records and body composition logs to reach your fitness goals!</p>
                    <button>LOGIN OR SIGNUP</button>
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
            </div>
        )
    }
}

export default Home
