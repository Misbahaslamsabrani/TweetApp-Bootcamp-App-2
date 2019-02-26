import Type from "../const/Type";
import "../../config";
import * as firebase from "firebase";

export const LOGIN = (email, pass) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((user) => {
                dispatch({ type: Type.logInS, logInUser: user })
            })
            .catch((error) => {
                dispatch({ type: Type.logInE, logInError: error, email: email })
            })
    }
}
export const SIGNUP = (email, pass, name) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((user) => {
                firebase.database().ref().child("Users").push({
                    name: name, userId: user.user.uid, email: email
                })
                dispatch({ type: Type.signUpS, signUpUser: user })
            })
            .catch((error) => {
                dispatch({ type: Type.signUpE, signUpError: error })
            })
    }
}
export const error = () => {
    return dispatch => {
        dispatch({ type: Type.remove })
    }
}

export const CURRENTUSER = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                    dispatch({ type: Type.currentUser, currentUser: user})
            } else {
                dispatch({ type: Type.currentUserError })
            }
        });
    }
}
export const Validation = (message) => {
    return { type: Type.validate, verrMess: message }
}

export const RemoveErrorMessages = () => {
    return dispatch => {
        dispatch({ type: Type.removeErrorMess })
    }
}
export const LOGOUT = () => {
    return dispatch => {
        firebase.auth().signOut();
        dispatch({ type: Type.logOut })
    }
}

export const PervDataOfAllUsers = () => {
    return dispatch => {
        firebase.database().ref().child("Users").on("value", (snapshot) => {
            const data = snapshot.val()
            const TemArr = []
            for (let key in data) {
                TemArr.push({
                    UserDataId: key,
                    userId: data[key].userId,
                    name: data[key].name,
                    email: data[key].email,
                })
            }
            dispatch({ type: Type.pervDataOfAllUsers, userData: TemArr })
        })
    }
}