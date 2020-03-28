import React from 'react'
import WeightLogIndexItem from './weight_log_index_item'

class WeightLogIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: this.props.currentUser.id,
            date: this.dateToday(),
            body_fat_percentage: "",
            body_fat_percentage: ""
        }

        this.updateBF = this.updateBF.bind(this)
        this.updateDate = this.updateDate.bind(this)
        this.updateWeight = this.updateWeight.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.props.getWeightLogs(this.props.currentUser.id)
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }

    handleSubmit(e) {
        e.preventDefault()
        const log = {
            user_id: this.state.user_id,
            date: this.state.date,
            weight: this.state.weight,
            body_fat_percentage: this.state.body_fat_percentage,
            lean_mass: this.lean_mass(),
            fat_mass: Number(this.fat_mass())
        }
        this.props.postWeightLog(this.props.currentUser.id, log)
    }

    lean_mass() {
        return this.state.weight - this.fat_mass()
    }

    fat_mass() {
        return ((this.state.body_fat_percentage / 100) * this.state.weight).toFixed(1)
    }

    updateWeight(e) {
        this.setState({
            weight: Number(e.target.value)
        })
    }
    updateDate(e) {
        this.setState({
            date: e.target.value
        })
    }
    updateBF(e) {
        this.setState({
            body_fat_percentage: Number(e.target.value)
        })
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

    changes() {
        const lastIdx = this.props.weightLogs.length - 1
        const log = this.props.weightLogs
        const weightChange = log.length > 1 ? log[lastIdx].weight - log[lastIdx-1].weight : ""
        const bfChange = log.length > 1 ? log[lastIdx].body_fat_percentage - log[lastIdx-1].body_fat_percentage : ""
        const lmChange = log.length > 1 ? log[lastIdx].lean_mass - log[lastIdx-1].lean_mass : ""
        const fmChange = log.length > 1 ? log[lastIdx].fat_mass - log[lastIdx-1].fat_mass : ""
        const changes = {
            weightChange: weightChange ? weightChange.toFixed(1) : "",
            bfChange: bfChange ? bfChange.toFixed(1) : "",
            lmChange: lmChange ? lmChange.toFixed(1) : "",
            fmChange: fmChange ? fmChange.toFixed(1) : ""
        }
        return changes
    }

    render() {
        console.log(this.props)
        const changes = this.changes()
        const { weightLogs } = this.props
        return (
            <div>
                <h1>WEIGHT LOG INDEX</h1>
                <div className="changes-since-last-log">
                    <h3>Changes since last log: </h3>
                    <p>Weight: {changes.weightChange}</p>
                    <p>Body Fat: {changes.bfChange}</p>
                    <p>Lean Mass: {changes.lmChange}</p>
                    <p>Fat Mass: {changes.fmChange}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>Date
                        <input type="date" value={this.state.date} onChange={this.updateDate}/>
                    </label>
                    <label>Weight
                        <input type="number" step="0.1" onChange={this.updateWeight}/>
                    </label>
                    <label>Body Fat Percentage
                        <input type="number" step="0.1" onChange={this.updateBF}/>
                    </label>
                    <button type="submit">LOG WEIGHT</button>
                </form>
                {
                    <p>{this.props.errors.join(". ")}</p>
                }
                {
                    weightLogs.map(log => (
                        <WeightLogIndexItem key={log.id} weightLog={log} />
                    ))
                }
            </div>
        )
    }
}

export default WeightLogIndex