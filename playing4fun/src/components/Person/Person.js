// THIS COMPONENT IS USED TO RENDER PERSONS DATA INSIDE APP COMPONENT

import React, { Component } from 'react'

// COMPONENTS IMPORT
import Name from '../Name/Name'

// STYLE
import './Person.css'

class Person extends Component {

    render() {
        return (
            <div className="person">
                <table>
                    <tbody>
                        <tr>
                            <td className="name"><Name name={ this.props.name }></Name></td>
                            <td className="age">({ this.props.age } years old)</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Person