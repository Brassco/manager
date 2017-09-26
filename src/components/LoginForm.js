import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onEmailChange, onPasswordChange, loginUser} from '../actions';
import {Card, CardItem, InputWithLabel, Button, ErrorText, Spiner} from './common';

class LoginForm extends Component {

    emailChange(email) {
        this.props.onEmailChange(email);
    }

    changePassword(pass) {
        this.props.onPasswordChange(pass)
    }

    buttonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spiner size={'small'}/>
        }
        return (
            <Button onPress={this.buttonPress.bind(this)}>
                Login
            </Button>
        )
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
                <ErrorText>
                    {this.props.error}
                </ErrorText>
                <CardItem>
                    {
                        this.renderButton()
                    }
                </CardItem>
            </Card>
        )
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, user, error, loading} = auth;
    return {
        email: email,
        password: password,
        user: user,
        error: error,
        loading: loading
    }
}

export default connect(mapStateToProps, {onEmailChange, onPasswordChange, loginUser})(LoginForm);