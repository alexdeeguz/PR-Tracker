import { connect } from 'react-redux'
import { log_in, removeErrors } from '../../actions/session_actions'
import SessionForm from '../session_form'

const mSTP = state => ({
    errors: state.errors,
    formType: 'login'
})

const mDTP = dispatch => ({
    action: user => dispatch(log_in(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)

