import { connect } from 'react-redux'
import Stats from '../stats'
import { getAllPersonalRecords } from '../../actions/personal_record_actions'
import { getAllWeightLogs } from '../../actions/weight_log_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    maxSquat: Math.max(...Object.values(state.entities.personalRecords)
        .filter(record => record.exercise === "squat")
        .map(record => record.weight)),
    maxBench: Math.max(...Object.values(state.entities.personalRecords)
        .filter(record => record.exercise === "bench")
        .map(record => record.weight)),
    maxDeadlift: Math.max(...Object.values(state.entities.personalRecords)
        .filter(record => record.exercise === "deadlift")
        .map(record => record.weight)),
    weightLogs: Object.values(state.entities.weightLogs).sort((a, b) => sortDate(a.date, b.date))
})

const mDTP = dispatch => ({
    getWeightLogs: id => dispatch(getAllWeightLogs(id)),
    getAllPersonalRecords: id => dispatch(getAllPersonalRecords(id))
})

function sortDate(dateOne, dateTwo) {
    const dateA = new Date(dateOne), dateB = new Date(dateTwo)
    return dateA - dateB
}

export default connect(mSTP, mDTP)(Stats)



