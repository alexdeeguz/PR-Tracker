import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import WeightLogContainer from './containers/weight_logs_container'
import PersonalRecordContainer from './containers/personal_records_container'
import StatsContainer from './containers/stats_container'
import HeaderContainer from './containers/header_container'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <HeaderContainer history={this.props.history}/>
                
                <Route exact path='/profile' component={StatsContainer}/>
                <Route path='/profile/weightlogs' component={WeightLogContainer} />
                <Route path='/profile/records' component={PersonalRecordContainer} />
            </div>
        )
    }
}

export default Profile