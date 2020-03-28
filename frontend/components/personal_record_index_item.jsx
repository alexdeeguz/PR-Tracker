import React from 'react'

class PersonalRecordIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { date, weight, reps, exercise } = this.props.record
        return (
            <div>
                <div className="personal-record">
                    <p>{date}</p>
                    <p>Exercise: {exercise.toUpperCase()}</p>
                    <p>Weight: {weight}LBS</p>
                    <p>Reps: {reps}</p>
                </div>
            </div>
        )
    }
}

export default PersonalRecordIndexItem