// THIS COMPONENT IS USED TO RENDER PERSONS DATA INSIDE APP COMPONENT

import React, { Component } from 'react'
import { connect } from 'react-redux';

// COMPONENTS IMPORT
import Name from '../Name/Name'

// STYLE
import './Person.css'

const Person = ({persons}) => (
    <div className="person">
        <table>
            <tbody>
                <tr>
                    <td className="name"><Name name={ persons.name }></Name></td>
                    <td className="age">({ persons.age } years old)</td>
                </tr>
            </tbody>
        </table>
    </div>
)


const mapStateToProps = (state) => {
    console.log('Person', state);
    return {
        showAges: state.showAges,
        persons: state.persons,
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators(personActions, dispatch);

export default connect(mapStateToProps)(Person); 