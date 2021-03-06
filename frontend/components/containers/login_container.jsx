import { connect } from 'react-redux'
import { log_in, removeErrors } from '../../actions/session_actions'
import SessionForm from '../session_form'

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'login'
})

const mDTP = dispatch => ({
    login: user => dispatch(log_in(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)

