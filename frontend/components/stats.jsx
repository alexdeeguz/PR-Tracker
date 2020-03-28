import React from 'react'

class Stats extends React.Component {
    constructor(props) {
        super(props)
    }


    componentWillMount() {
        this.props.getAllPersonalRecords(this.props.currentUser.id)
    }

    render() {
        let total = 0
        const { maxSquat, maxBench, maxDeadlift } = this.props
        maxSquat >= 0 ? total += maxSquat : null
        maxBench >= 0 ? total += maxBench : null
        maxDeadlift >= 0 ? total += maxDeadlift : null 
        return (
            <div>
                <h1>STATS</h1>
                <div>
                    {maxSquat <= 0 ? <h3>SQUAT: N/A</h3> : <h3>SQUAT: {maxSquat}</h3>}
                    {maxBench <= 0 ? <h3>BENCH: N/A</h3> : <h3>BENCH: {maxBench}</h3>}
                    {maxDeadlift <= 0 ? <h3>DEADLIFT: N/A</h3> : <h3>DEADLIFT: {maxDeadlift}</h3>}
                    <h2>TOTAL: {total}</h2>
                </div>
            </div>
        )
    }
}

export default Stats