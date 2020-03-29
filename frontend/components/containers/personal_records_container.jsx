import { connect } from 'react-redux'
import PersonalRecordIndex from '../personal_record_index'
import { getAllPersonalRecords, postPersonalRecord } from '../../actions/personal_record_actions'
import { removeErrors } from '../../actions/session_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id], 
    personalRecords: Object.values(state.entities.personalRecords),
    errors: state.errors.session
})

const mDTP = dispatch => ({
    getAllPersonalRecords: id => dispatch(getAllPersonalRecords(id)),
    postPersonalRecord: (id, record) => dispatch(postPersonalRecord(id, record)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(PersonalRecordIndex)