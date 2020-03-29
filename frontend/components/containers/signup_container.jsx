import { connect } from 'react-redux'
import SessionForm from '../session_form'
import { sign_up, removeErrors } from '../../actions/session_actions'

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'sign up'
})

const mDTP = dispatch => ({
    signup: (user) => dispatch(sign_up(user)),
    removeErrors: () => dispatch(removeErrors())
})

export default connect(mSTP, mDTP)(SessionForm)