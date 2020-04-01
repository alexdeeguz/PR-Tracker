import React from 'react'

class Stats extends React.Component {
    constructor(props) {
        super(props)
    }


    componentWillMount() {
        this.props.getAllPersonalRecords(this.props.currentUser.id)
        this.props.getWeightLogs(this.props.currentUser.id)
    }

    render() {
        let weight, bf, lm, fm;
        const currentWeightLog = this.props.weightLogs[this.props.weightLogs.length - 1]
        if (currentWeightLog) {
            weight = currentWeightLog.weight
            bf = currentWeightLog.body_fat_percentage
            lm = currentWeightLog.lean_mass
            fm = currentWeightLog.fat_mass
        }
        let total = 0
        const { maxSquat, maxBench, maxDeadlift } = this.props
        maxSquat >= 0 ? total += maxSquat : null
        maxBench >= 0 ? total += maxBench : null
        maxDeadlift >= 0 ? total += maxDeadlift : null 
        return (
            <div className="stats-container">
                <h1>STATS</h1>
                    <h2>{this.props.currentUser.username.toUpperCase()}</h2>
                <div className="stats">
                    <h3>Age: </h3>
                    <h3>Height:</h3>
                    <h3>Weight: {weight} lbs</h3>
                </div>
                <h2>BODY COMPOSITION</h2>
                <div className="stats">
                    <h3>Body Fat: {bf}%</h3>
                    <h3>Lean Mass: {lm} lbs</h3>
                    <h3>Fat Mass: {fm} lbs</h3>
                </div>
                <h2>STRENGTH</h2>
                <div className="strength">
                    <div className="stats">
                        <div>
                            {maxSquat <= 0 ? <h2>Squat: N/A</h2> : <h2>Squat: {maxSquat}</h2>}
                            <div>
                                <h3>
                                    <p>Relative:</p> 
                                    {maxSquat <= 0 ? <p>N/A</p> : <p>{(maxSquat / weight).toFixed(2)}</p>}
                                </h3>
                            </div>
                        </div>
                        <div>
                            {maxBench <= 0 ? <h2>Bench: N/A</h2> : <h2>Bench: {maxBench}</h2>}
                            <div>
                                <h3>
                                    <p>Relative:</p>
                                    {maxBench <= 0 ? <p>N/A</p> : <p>{(maxBench / weight).toFixed(2)}</p>}
                                </h3>
                            </div>
                        </div>
                        <div>
                            {maxDeadlift <= 0 ? <h2>Deadlift: N/A</h2> : <h2>Deadlift: {maxDeadlift}</h2>}
                            <div>
                                <h3>
                                    <p>Relative:</p>
                                    {maxDeadlift <= 0 ? <p>N/A</p> : <p>{(maxDeadlift / weight).toFixed(2)}</p>}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <h2 id="total">STRENGTH TOTAL: {total}</h2>
                </div>
        
            </div>
        )
    }
}

export default Stats