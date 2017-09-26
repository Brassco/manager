import firebase from 'firebase';
import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const onEmailChange = (email) => {
    return {
        type: EMAIL_CHANGE,
        payload: email
    }
}

export const onPasswordChange = (pass) => {
    return {
        type: PASSWORD_CHANGE,
        payload: pass
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) =>
                onLoginSuccess(dispatch, user)
            )
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((user) =>
                        onLoginSuccess(dispatch, user)
                    )
                    .catch(() => {
                        onLoginFail(dispatch)
                    })
            })
    }
}

const onLoginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
}

const onLoginFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}