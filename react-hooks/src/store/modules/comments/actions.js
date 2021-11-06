// ACTION TO REQUEST DATA FROM API
const loadComments = () => {
	return {
		type: 'LOAD_COMMENTS',
	};
};

// ACTION EXECUTED AFTER SUCCESSFULL RESPONSE
const loadCommentsSuccess = (response) => {
	return {
		type: 'LOAD_COMMENTS_SUCCESS',
		payload: response,
	};
};

// ACTION EXECUTED AFTER A BAD REQUEST
const loadCommentsFailure = (response) => {
	return {
		type: 'LOAD_COMMENTS_FAILURE',
		payload: response,
	};
};

export { loadComments, loadCommentsSuccess, loadCommentsFailure };
