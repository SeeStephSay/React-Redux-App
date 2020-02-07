import axios from 'axios';

// ACTION
export const FETCH_GIF_START = 'FETCH_GIF_START';
export const FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS';
export const FETCH_GIF_FAILURE = 'FETCH_GIF_FAILURE';

// ACTION CREATOR?

// MIDDLEWARE SETUP
export const getGIF = () => (dispatch) => {
	dispatch({ type: 'FETCH_GIF_START' });
	axios
		.get('https://api.giphy.com/v1/gifs/search')
		.then((res) => {
			dispatch({ type: 'FETCH_GIF_SUCCESS', payload: res.data.quote });
		})
		.catch((err) => {
			dispatch({ type: 'FETCH_GIF_FAILURE', payload: err.response });
		});
};
