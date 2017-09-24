import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from "./components/LoginForm";

class App extends Component {
    
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC_LFBwHL3bsR-v10WQVfdSqPu_vXWyBdg',
            authDomain: 'manager-1de11.firebaseapp.com',
            databaseURL: 'https://manager-1de11.firebaseio.com',
            projectId: 'manager-1de11',
            storageBucket: 'manager-1de11.appspot.com',
            messagingSenderId: '2638109237'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        )
    }
}

export default App;