import React from 'react'
import PersonalRecordIndexItem from './personal_record_index_item'

class PersonalRecordIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: this.props.currentUser.id,
            date: this.dateToday(),
            exercise: "",
            weight: "",
            reps: 1
        }

        this.updateDate = this.updateDate.bind(this)
        this.updateExercise = this.updateExercise.bind(this)
        this.updateWeight = this.updateWeight.bind(this)
        this.updateReps = this.updateReps.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.props.getAllPersonalRecords(this.props.currentUser.id)
    }

    dateToday() {
        let date = new Date()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()
        if (month < 10) {
            month = `0${month}`
        }
        if (day < 10) {
            day = `0${day}`
        }
        return `${year}-${month}-${day}`
    }

    updateDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    updateExercise(e) {
        this.setState({
            exercise: e.target.value
        })
    }

    updateWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }

    updateReps(e) {
        this.setState({
            reps: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.postPersonalRecord(this.props.currentUser.id, this.state)
    }

    render() {
        const { personalRecords } = this.props
        const squatRecords = personalRecords.filter(record => record.exercise === "squat").sort((a, b) => a.weight - b.weight)
        const benchRecords = personalRecords.filter(record => record.exercise === "bench").sort((a, b) => a.weight - b.weight)
        const deadliftRecords = personalRecords.filter(record => record.exercise === "deadlift").sort((a,b) => a.weight - b.weight)
        return (
            <div>
                <h2>YOU HAVE HIT {personalRecords.length} PERSONAL RECORDS!</h2>
                <form>
                    <h3>Log a PR: </h3>
                    <label>
                        <input value={this.state.date} type="date" onChange={this.updateDate}/>
                    </label>
                    <select onChange={this.updateExercise}>
                        <option disabled selected>--Select an exercise--</option>
                        <option value="squat">Squat</option>
                        <option value="bench">Bench</option>
                        <option value="deadlift">Deadlift</option>
                    </select>
                    <label>Weight
                        <input type="number" step="5" min="5" value={this.state.weight} onChange={this.updateWeight}/>
                    </label>
                    <label>Reps
                        <input type="number" step="1" min="1" value={this.state.reps} onChange={this.updateReps}/>
                    </label>
                    <button onClick={this.handleSubmit}>LOG PR</button>
                </form>

                <div className="personal-records">
                    <div>
                        {squatRecords.length === 1 ? <h3>{squatRecords.length} SQUAT PR</h3> : <h3>{squatRecords.length} SQUAT PRS</h3>}
                        {
                            squatRecords.map(record => (
                                <PersonalRecordIndexItem key={record.id} record={record} />
                            ))
                        }
                    </div>
                    <div>
                        {benchRecords.length === 1 ? <h3>{benchRecords.length} BENCH PR</h3> : <h3>{benchRecords.length} BENCH PRS</h3>}
                        {
                            benchRecords.map(record => (
                                <PersonalRecordIndexItem key={record.id} record={record} />
                            ))
                        }
                    </div>
                    <div>
                        {deadliftRecords.length === 1 ? <h3>{deadliftRecords.length} DEADLIFT PR</h3> : <h3>{deadliftRecords.length} DEADLIFT PRS</h3>}
                        {
                            deadliftRecords.map(record => (
                                <PersonalRecordIndexItem key={record.id} record={record} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalRecordIndex