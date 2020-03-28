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
        }

        this.updateBF = this.updateBF.bind(this)
        this.updateDate = this.updateDate.bind(this)
        this.updateWeight = this.updateWeight.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.props.getWeightLogs(this.props.currentUser.id)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.postWeightLog(this.props.currentUser.id, this.state)
    }

    updateWeight(e) {
        this.setState({
            weight: parseInt(e.target.value)
        })
    }
    updateDate(e) {
        this.setState({
            date: e.target.value
        })
    }
    updateBF(e) {
        this.setState({
            body_fat_percentage: parseInt(e.target.value)
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
        
    }

    render() {
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