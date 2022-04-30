import {UserData} from "../../utils/firebase/firebase.utils";
import {signInFailure, signInSuccess, signOutFailed, signOutSuccess, signUpFailed} from "./user.action";
import {AnyAction} from "redux";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: string | null;
}

export const USER_INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
    if (signInSuccess.match(action)) {
        return {...state, currentUser: action.payload};
    }

    if (signOutSuccess.match(action)) {
        return {...state, currentUser: null};
    }

    if (signInFailure.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
        return {...state, error: action.payload};
    }

    return state;
};
