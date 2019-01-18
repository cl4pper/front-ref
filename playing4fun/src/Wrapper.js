import React, { Component } from 'react';
import Person from './components/Person/Person';
import PersonsList from './components/PersonsList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as personActions from './store/actions/person';

class Wrapper extends Component{

    changeButton = () => {
        this.setState( (state) => {
            return{
                showAges: !state.showAges,
            }
        })
    }

    render(){
        return (
            <div className="app">
            {/* PAGE TITLE */}
            <header>
                <div className="header-text">
                    <h2>List of Persons</h2>
                    <hr/>
                    <h3>A model of React app</h3>
                </div>
            </header>

            <button onClick={() => this.props.changeButton()}>{ this.props.showAges ? 'Hide ages' : 'Show Ages' }</button>

            <section className="content">
                {/* LIST OF CONTACTS */}
                 <PersonsList />
            </section>
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        showAges: state.showAges,
        persons: state.persons,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(personActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);