import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {
    StackNavigator,
} from 'react-navigation';
import firebase from 'firebase';
import config from './config';
import reducers from './reducers';
import LoginForm from "./components/LoginForm";
import EmployeeList from './components/EmployeeList';

import RouterComponent from './RouterComponent';

class App extends Component {
    
    componentWillMount() {
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View>
                    <RouterComponent/>
                </View>
            </Provider>
        )
    }
}

export default App;