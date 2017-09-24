import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onEmailChange, onPasswordChange} from '../actions';
import {Card, CardItem, InputWithLabel, Button} from './common';

class LoginForm extends Component {

    emailChange(email) {
        this.props.onEmailChange(email);
    }

    changePassword(pass) {
        this.props.onPasswordChange(pass)
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <InputWithLabel
                    label={'Email'}
                    placeholder={'Email'}
                    onChangeText={this.emailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardItem>
                <CardItem>
                    <InputWithLabel
                    label={'Password'}
                    placeholder={'password'}
                    onChangeText={this.changePassword.bind(this)}
                    value={this.props.password}
                    />
                </CardItem>
                <CardItem>
                    <Button>
                        Login
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, {onEmailChange, onPasswordChange})(LoginForm);