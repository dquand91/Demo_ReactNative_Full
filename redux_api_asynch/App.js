import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './redux/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

//defaultState
//http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=
