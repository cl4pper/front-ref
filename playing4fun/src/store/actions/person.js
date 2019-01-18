export const changeButton = data => ({
    type: 'CHANGE_BUTTON_REQUEST',
    payload: data,
});

export const deletePerson = id => ({
    type: 'DELETE_PERSON_REQUEST',
    payload: id
})