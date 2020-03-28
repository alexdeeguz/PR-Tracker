import React from 'react'

class WeightLogIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    lean_mass() {
        this.props.weightLog.lean_mass = this.props.weightLog.weight - this.fat_mass()
        return this.props.weightLog.lean_mass
    }

    fat_mass() {
        this.props.weightLog.fat_mass = Number(((this.props.weightLog.body_fat_percentage / 100) * this.props.weightLog.weight).toFixed(1))
        return this.props.weightLog.fat_mass
    }

    render() {
        const { date, weight, body_fat_percentage } = this.props.weightLog
        return (
            <div className="weight-log">
                <p>{date}</p>
                <p>WEIGHT: {weight}LBS</p>
                <p>BODY FAT: {body_fat_percentage}%</p>
                <p>LEAN MASS: {this.lean_mass()}LBS</p>
                <p>FAT MASS: {this.fat_mass()}LBS</p>
            </div>
        )
    }
}

export default WeightLogIndexItem