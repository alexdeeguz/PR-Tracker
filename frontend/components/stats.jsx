import React from 'react'

class Stats extends React.Component {
    constructor(props) {
        super(props)
    }


    componentWillMount() {
        this.props.getAllPersonalRecords(this.props.currentUser.id)
    }

    render() {
        const { maxSquat, maxBench, maxDeadlift } = this.props
        return (
            <div>
                <h1>STATS</h1>
                <div>
                    <h3>SQUAT: {maxSquat}</h3>
                    <h3>BENCH: {maxBench}</h3>
                    <h3>DEADLIFT: {maxDeadlift}</h3>
                    <h2>TOTAL: {maxBench + maxSquat + maxDeadlift}</h2>
                </div>
            </div>
        )
    }
}

export default Stats