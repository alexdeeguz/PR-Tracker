import { RECEIVE_WEIGHT_LOGS, RECEIVE_WEIGHT_LOG } from '../actions/weight_log_actions'

const WeightLogsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_WEIGHT_LOGS:
            return action.weightLogs
        case RECEIVE_WEIGHT_LOG:
            newState[action.weightLog.id] = action.weightLog
            return newState
        default:
            return state
    }
}

export default WeightLogsReducer