// import * as githubActions from './actions'

const INITIAL_STATE = {
	loading: false,
	error: false,
	data: [],
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'LOAD_COMMENTS':
			return {
				...state,
				loading: true,
				error: false,
			};

		case 'LOAD_COMMENTS_SUCCESS':
			return {
				...state,
				data: action.payload,
				loading: false,
			};

		case 'LOAD_COMMENTS_FAILURE':
			return {
				...state,
				loading: false,
				error: true,
			};

		default:
			return state;
	}
}

export { reducer };
