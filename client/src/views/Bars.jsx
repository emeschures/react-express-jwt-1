import React from 'react'
import httpClient from '../httpClient'

class Bars extends React.Component {

    state = {bars: [] }

componentDidMount() {
    // make api call to get bars:
    httpClient.getBars().then((serverResponse) => {
        this.setState({ bars: serverResponse.data })
    })
}

    render() {
        const { bars } = this.state
        return (
            <div className="bars">
                <h1>Bars List</h1>
                <ul>
                    {bars.map((b) => {
                        return <li key={b._id}>{b.name} [Posted by]: {b.user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Bars