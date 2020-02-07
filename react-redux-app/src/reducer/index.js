import { FETCH_GIF_START, FETCH_GIF_SUCCESS, FETCH_GIF_FAILURE } from '../actions/index';

const initialState = {
	GIF        : null,
	isFetching : false,
	error      : '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_GIF_START:
			return {
				...state,
				isFetching : true,
			};
		case FETCH_GIF_SUCCESS:
			return {
				...state,
				GIF        : action.payload,
				isFetching : false,
				error      : '',
			};
		case FETCH_GIF_FAILURE:
			return {
				...state,
				isFetching : false,
				error      : action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
