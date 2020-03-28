export const fetchPersonalRecords = userId => (
    $.ajax({
        url: `/api/users/${userId}/personal_records`,
        method: 'GET'
    })
)

export const createPersonalRecord = (userId, personal_record) => (
    $.ajax({
        url: `/api/user/${userId}/personal_records`,
        method: 'POST',
        data: { personal_record }
    })
)