import { connect } from 'react-redux'
import Stats from '../stats'
import { getAllPersonalRecords } from '../../actions/personal_record_actions'

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
        .map(record => record.weight))
})

const mDTP = dispatch => ({
    getAllPersonalRecords: id => dispatch(getAllPersonalRecords(id))
})

export default connect(mSTP, mDTP)(Stats)



