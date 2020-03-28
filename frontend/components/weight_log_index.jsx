import React from 'react'
import WeightLogIndexItem from './weight_log_index_item'

class WeightLogIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: this.props.currentUser.id,
            date: this.dateToday(),
            weight: "",
            body_fat_percentage: ""
            // lean_mass: this.lean_mass(),
            // fat_mass: this.fat_mass()
        }

        this.updateBF = this.updateBF.bind(this)
        this.updateDate = this.updateDate.bind(this)
        this.updateWeight = this.updateWeight.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // lean_mass() {
    //     return this.state.weight !== "" ? this.state.weight - this.state.fat_mass() : ""
    // }

    // fat_mass() {
    //     return this.state.weight !== "" && this.state.body_fat_percentage !== "" ? ((this.state.body_fat_percentage / 100) * this.state.weight).toFixed(1) : ""
    // }

    componentWillMount() {
        this.props.getWeightLogs(this.props.currentUser.id)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.postWeightLog(this.props.currentUser.id, this.state)
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
        // const weightChange = this.props.weightLogs[lastIdx].weight - this.props.weightLogs[lastIdx-1].weight
        // const leanMassChange = this.props.weightLogs[lastIdx].lean_mass - this.props.weightLogs[lastIdx-1].lean_mass
        // console.log(weightChange)
        // console.log(leanMassChange)
        console.log(this.props.weightLogs[lastIdx].lean_mass)
    }

    render() {
        this.props.weightLogs.length > 1 ? this.changes() : ""
        const { weightLogs } = this.props
        return (
            <div>
                <h1>WEIGHT LOG INDEX</h1>
                <div className="changes-since-last-log">
                    <h3>Changes since last log: </h3>
                    <p>Weight: </p>
                    <p>Lean Mass: </p>
                    <p>Fat Mass: </p>
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
                    weightLogs.map(log => (
                        <WeightLogIndexItem key={log.id} weightLog={log} />
                    ))
                }
            </div>
        )
    }
}

export default WeightLogIndex