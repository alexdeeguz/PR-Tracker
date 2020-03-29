import * as recordAPIUtil from '../util/personal_records_utils'
import { RECEIVE_ERRORS } from './weight_log_actions'

export const RECEIVE_PERSONAL_RECORDS = "RECEIVE_PERSONAL_RECORDS"
export const RECEIVE_PERSONAL_RECORD = "RECEIVE_PERSONAL_RECORD"

const receivePersonalRecords = records => ({
    type: RECEIVE_PERSONAL_RECORDS,
    records
})

const receivePersonalRecord = record => ({
    type: RECEIVE_PERSONAL_RECORD,
    record
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const getAllPersonalRecords = userId => dispatch => 
    recordAPIUtil.fetchPersonalRecords(userId)
    .then(records => dispatch(receivePersonalRecords(records)))

export const postPersonalRecord = (userId, record) => dispatch => 
    recordAPIUtil.createPersonalRecord(userId, record)
    .then(record => dispatch(receivePersonalRecord(record)),
    error => dispatch(receiveErrors(error.responseJSON)))




