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
            reps: 1,
            filter: 'all',
            selected: 'ALL'
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

    componentWillUnmount() {
        this.props.removeErrors()
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
        const record = {
            user_id: this.state.user_id,
            date: this.state.date,
            exercise: this.state.exercise,
            weight: this.state.weight,
            reps: this.state.reps
        }
        this.props.postPersonalRecord(this.props.currentUser.id, record)
    }

    render() {
        const { personalRecords } = this.props
        let squatRecords;
        let benchRecords;
        let deadliftRecords;
        // const errors = this.props.errors ? this.props.errors : [""]
        if (this.state.filter === 'all') {
             squatRecords = personalRecords.filter(record => record.exercise === "squat").sort((a, b) => a.weight - b.weight)
             benchRecords = personalRecords.filter(record => record.exercise === "bench").sort((a, b) => a.weight - b.weight)
             deadliftRecords = personalRecords.filter(record => record.exercise === "deadlift").sort((a,b) => a.weight - b.weight)
        } else if (this.state.filter === '1rm') {
            squatRecords = personalRecords.filter(record => record.exercise === "squat" && record.reps === 1).sort((a, b) => a.weight - b.weight)
            benchRecords = personalRecords.filter(record => record.exercise === "bench" && record.reps === 1).sort((a, b) => a.weight - b.weight)
            deadliftRecords = personalRecords.filter(record => record.exercise === "deadlift" && record.reps === 1).sort((a, b) => a.weight - b.weight)
        } else if (this.state.filter === 'rm') {
            squatRecords = personalRecords.filter(record => record.exercise === "squat" && record.reps > 1).sort((a, b) => a.weight - b.weight)
            benchRecords = personalRecords.filter(record => record.exercise === "bench" && record.reps > 1).sort((a, b) => a.weight - b.weight)
            deadliftRecords = personalRecords.filter(record => record.exercise === "deadlift" && record.reps > 1).sort((a, b) => a.weight - b.weight)
        }
        return (
            <div className="personal-records-container">
                <h1>YOU HAVE HIT {personalRecords.length} PERSONAL RECORDS!</h1>
                <form className="log-pr-form">
                    <h3>New PR: </h3>
                    <label>
                        <input value={this.state.date} type="date" onChange={this.updateDate}/>
                    </label>
                    <select onChange={this.updateExercise}>
                        <option disabled selected>--Select an exercise--</option>
                        <option value="squat">Squat</option>
                        <option value="bench">Bench</option>
                        <option value="deadlift">Deadlift</option>
                    </select>
                    <label>Weight:
                        <input type="number" step="5" min="5" value={this.state.weight} onChange={this.updateWeight}/>
                    </label>
                    <label>Reps:
                        <input type="number" step="1" min="1" value={this.state.reps} onChange={this.updateReps}/>
                    </label>
                    <button onClick={this.handleSubmit}>LOG PR</button>
                </form>
                {/* {
                    errors.map(error => (
                        <p className="errors">{error}</p>
                    ))
                } */}
                <p className="errors">{this.props.errors.join(" ")}</p>
                
                <div className="pr-filters"> 
                    <li id={this.state.selected === 'ALL' ? 'selected' : "non-selected"} onClick={(e) => this.setState({filter: 'all', selected: e.target.innerHTML})}>ALL</li>
                    <li id={this.state.selected === '1 REP MAX' ? 'selected' : "non-selected"} onClick={(e) => this.setState({ filter: '1rm', selected: e.target.innerHTML })}>1 REP MAX</li>
                    <li id={this.state.selected === 'REP MAX' ? 'selected' : "non-selected"} onClick={(e) => this.setState({ filter: 'rm', selected: e.target.innerHTML })}>REP MAX</li>
                </div>

                <div className="personal-records">
                    <div>
                        {squatRecords.length === 1 ? <h2>{squatRecords.length} SQUAT PR</h2> : <h2>{squatRecords.length} SQUAT PRS</h2>}
                        <div className="pr-exercise-container">
                            {
                                squatRecords.map(record => (
                                    <PersonalRecordIndexItem key={record.id} record={record} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {benchRecords.length === 1 ? <h2>{benchRecords.length} BENCH PR</h2> : <h2>{benchRecords.length} BENCH PRS</h2>}
                        <div className="pr-exercise-container">
                            {
                                benchRecords.map(record => (
                                    <PersonalRecordIndexItem key={record.id} record={record} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {deadliftRecords.length === 1 ? <h2>{deadliftRecords.length} DEADLIFT PR</h2> : <h2>{deadliftRecords.length} DEADLIFT PRS</h2>}
                        <div className="pr-exercise-container">
                            {
                                deadliftRecords.map(record => (
                                    <PersonalRecordIndexItem key={record.id} record={record} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalRecordIndex