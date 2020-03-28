import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import WeightLogContainer from './containers/weight_logs_container'
import PersonalRecordContainer from './containers/personal_records_container'
import StatsContainer from './containers/stats_container'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="/profile">Stats</Link>
                <Link to="/profile/records">Personal Records</Link>
                <Link to="/profile/weightlogs">Body Composition</Link>
                <Route exact path='/profile' component={StatsContainer}/>
                <Route path='/profile/weightlogs' component={WeightLogContainer} />
                <Route path='/profile/records' component={PersonalRecordContainer} />
            </div>
        )
    }
}

export default Profile