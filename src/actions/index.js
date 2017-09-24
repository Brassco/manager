import {EMAIL_CHANGE, PASSWORD_CHANGE} from './types';

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