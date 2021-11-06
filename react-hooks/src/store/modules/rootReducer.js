import { combineReducers } from 'redux';

import { reducer as commentsReducer } from './comments';

const rootReducer = combineReducers({
	comments: commentsReducer,
});

export { rootReducer };
