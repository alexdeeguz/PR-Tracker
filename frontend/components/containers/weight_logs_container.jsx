import { connect } from 'react-redux'
import WeightLogIndex from '../weight_log_index'
import { getAllWeightLogs, postWeightLog } from '../../actions/weight_log_actions'
import { removeErrors } from '../../actions/session_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id], 
    weightLogs: Object.values(state.entities.weightLogs).sort((a, b) => sortDate(a.date, b.date)),
    errors: state.errors.session
})

const mDTP = dispatch => ({
    getWeightLogs: id => dispatch(getAllWeightLogs(id)),
    postWeightLog: (id, log) => dispatch(postWeightLog(id, log)),
    removeErrors: () => dispatch(removeErrors())
})

function sortDate(dateOne, dateTwo) {
    const dateA = new Date(dateOne), dateB = new Date(dateTwo)
    return dateA - dateB
}

export default connect(mSTP, mDTP)(WeightLogIndex)