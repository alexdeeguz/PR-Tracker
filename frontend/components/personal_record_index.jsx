import React from 'react'
import PersonalRecordIndexItem from './personal_record_index_item'

class PersonalRecordIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getAllPersonalRecords(this.props.currentUser.id)
    }

    render() {
        const { personalRecords } = this.props

        return (
            <div>
                <h1>PR INDEX</h1>
                {
                    personalRecords.map(record => (
                        <PersonalRecordIndexItem key={record.id} record={record} />
                    ))
                }
            </div>
        )
    }
}

export default PersonalRecordIndex