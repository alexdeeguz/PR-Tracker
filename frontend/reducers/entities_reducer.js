import { combineReducers } from 'redux'
import UsersReducer from './users_reducer'
import WeightLogsReducer from './weight_logs_reducer'
import PersonalRecordsReducer from './personal_records_reducer'

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    weightLogs: WeightLogsReducer,
    personalRecords: PersonalRecordsReducer
})

export default EntitiesReducer