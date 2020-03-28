import * as recordAPIUtil from '../util/personal_records_utils'

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

export const getAllPersonalRecords = userId => dispatch => 
    recordAPIUtil.fetchPersonalRecords(userId)
    .then(records => dispatch(receivePersonalRecords(records)))

export const postPersonalRecord = (userId, record) => dispatch => 
    recordAPIUtil.createPersonalRecord(userId, record)
    .then(record => dispatch(receivePersonalRecord(record)))




