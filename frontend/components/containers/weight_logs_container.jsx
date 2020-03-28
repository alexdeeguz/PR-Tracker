import { connect } from 'react-redux'
import WeightLogIndex from '../weight_log_index'
import { getAllWeightLogs, postWeightLog } from '../../actions/weight_log_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id], 
    weightLogs: Object.values(state.entities.weightLogs)
})

const mDTP = dispatch => ({
    getWeightLogs: id => dispatch(getAllWeightLogs(id)),
    postWeightLog: (id, log) => dispatch(postWeightLog(id, log))
})

export default connect(mSTP, mDTP)(WeightLogIndex)