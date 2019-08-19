import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: false
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return { cityName: null, error: false, isLoading: true, temp: null };
        case 'FETCH_SUCCESS':
            return { cityName: action.cityName, error: false, isLoading: false, temp: action.temp };
        case 'FETCH_ERROR':
            return { cityName: null, error: true, isLoading: false, temp: null };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
