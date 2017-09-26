import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import config from './config';
import reducers from './reducers';
import LoginForm from "./components/LoginForm";

class App extends Component {
    
    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        )
    }
}

export default App;