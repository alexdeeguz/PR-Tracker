import * as weightLogAPIUtil from '../util/weight_log_utils'

export const RECEIVE_WEIGHT_LOGS = "RECEIVE_WEIGHT_LOGS"
export const RECEIVE_WEIGHT_LOG = "RECEIVE_WEIGHT_LOG"

const receiveWeightLogs = (weightLogs) => ({
    type: RECEIVE_WEIGHT_LOGS,
    weightLogs
})

const receiveWeightLog = weightLog => ({
    type: RECEIVE_WEIGHT_LOG,
    weightLog
})

export const getAllWeightLogs = id => dispatch => 
    weightLogAPIUtil.fetchWeightLogs(id)
    .then(weightLogs => dispatch(receiveWeightLogs(weightLogs)))

export const postWeightLog = (id, log) => dispatch => 
    weightLogAPIUtil.createWeightLog(id, log)
    .then(log => dispatch(receiveWeightLog(log)))