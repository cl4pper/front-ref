import axios from 'axios';

// ACTIONS
import * as commentsActions from './actions';

const ROUTE = 'https://jsonplaceholder.typicode.com/comments';

const commentsRequest = () => {
	return function (dispatch) {
		dispatch(commentsActions.loadComments());
		axios
			.get(ROUTE)
			.then((response) => {
				dispatch(commentsActions.loadCommentsSuccess(response.data));
			})
			.catch((response) => {
				dispatch(commentsActions.loadCommentsFailure(response.error));
			});
	};
};

export { commentsRequest };
