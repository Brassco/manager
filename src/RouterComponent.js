import React, {Component} from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


const RouterComponent = StackNavigator({
    List: {screen: EmployeeList}
});

export default RouterComponent;