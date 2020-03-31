import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
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
                <ProtectedRoute path='/weightlogs' component={WeightLogContainer}/>
                <ProtectedRoute path='/records' component={PersonalRecordContainer}/>
                <ProtectedRoute path='/profile' component={Profile}/>
                <Route path='/' component={HomeContainer}/>
            </Switch>
        </div>
    )
}

export default App