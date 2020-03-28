export const fetchWeightLogs = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/weight_logs`,
        method: 'GET'
    })
)

export const createWeightLog = (userId, weight_log) => {
    debugger
    return (
        $.ajax({
            url: `/api/users/${userId}/weight_logs`,
            method: 'POST',
            data: { weight_log }
        })
    )
}