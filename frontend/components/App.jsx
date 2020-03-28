import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute } from '../util/route_utils'
import HomeContainer from './containers/home_container'
import LoginContainer from './containers/login_container'
import SignupContainer from './containers/signup_container'
import WeightLogContainer from './containers/weight_logs_container'
import PersonalRecordContainer from './containers/personal_records_container'
import Profile from './profile'

const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute path='/login' component={LoginContainer}/>
                <AuthRoute path='/signup' component={SignupContainer}/>
                <Route path='/weightlogs' component={WeightLogContainer}/>
                <Route path='/records' component={PersonalRecordContainer}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/' component={HomeContainer}/>
            </Switch>
        </div>
    )
}

export default App