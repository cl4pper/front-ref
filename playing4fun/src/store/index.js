import { createStore } from 'redux';

const INITIAL_STATE = {
    persons: [
        { id: 0, name: 'Matts', age: 21 },
        { id: 1, name: 'Dani', age: 28 },
        { id: 2, name: 'Nuno', age: 49 }
    ],
    showAges: true,
    agesStorage: []    
};

const person = function(state = INITIAL_STATE, action){
    switch(action.type){

        case 'CHANGE_BUTTON_REQUEST':
            console.log('Ouvindo :', action.type)
            return { ...state, showAges: !state.showAges};

        case 'DELETE_PERSON_REQUEST':
            console.log(action.payload);
            return {...state, persons: state.persons.filter(person => person.id !== action.payload.id )}

        default:
            return state;
    }

}


export default createStore(person);