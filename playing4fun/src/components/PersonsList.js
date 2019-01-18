import React from 'react'
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as personsActions from '../store/actions/person';

const PersonsList = ({persons, deletePerson}) => (
    <ul className="contact-list">
        
        {
            persons.map( person => (
                <li className="contact" key={person.id}>
                    <div className="person">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="name">
                                        <p className="name">
                                            <strong>{ person.name }</strong>
                                        </p>                            
                                    </td>
                                    <td className="age">({ person.age } years old)</td>
                                    <td><button onClick={() => deletePerson(person.id)}>x</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>        
                </li>
            ))
        }
    </ul>
)



const mapStateToProps = (state) => {
    console.log(state);
    return {
        showAges: state.showAges,
        persons: state.persons,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(personsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList);