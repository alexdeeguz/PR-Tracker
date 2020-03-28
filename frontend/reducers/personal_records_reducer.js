import { RECEIVE_PERSONAL_RECORDS, RECEIVE_PERSONAL_RECORD } from '../actions/personal_record_actions'

const PersonalRecordReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_PERSONAL_RECORDS:
            return action.records
        case RECEIVE_PERSONAL_RECORD:
            newState[action.record.id] = action.record
            return newState
        default: 
            return state
    }
}

export default PersonalRecordReducer