import React from 'react'

class WeightLogIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { date, weight, body_fat_percentage, lean_mass, fat_mass } = this.props.weightLog
        console.log(this.props.weightLog)
        return (
            <div className="weight-log">
                <p>{date}</p>
                <p>WEIGHT: {weight.toFixed(1)} LBS</p>
                <p>BODY FAT: {body_fat_percentage.toFixed(1)}%</p>
                <p>LEAN MASS: {lean_mass.toFixed(1)} LBS</p>
                <p>FAT MASS: {fat_mass.toFixed(1)} LBS</p>
            </div>
        )
    }
}

export default WeightLogIndexItem