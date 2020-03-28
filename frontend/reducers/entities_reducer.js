import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import WeightLogsReducer from './weight_logs_reducer'


const EntitiesReducer = combineReducers({
    users: UsersReducer,
    weightLogs: WeightLogsReducer
})

export default EntitiesReducer