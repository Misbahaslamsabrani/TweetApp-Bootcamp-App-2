import Type from "../const/Type"
const initState={
    allUsers: [],
    currentUser: null,
    errorMessage: "",
    vErrorMessage: "",
    vErrorFlag: false,
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case Type.currentUser:
        return state={
            ...state,
            currentUser: action.currentUser
        }
        case Type.currentUserError:
        return state = {
            ...state,
            currentUser: null,
        }
        case Type.validate :
        return state = {
            ...state,
            vErrorFlag: true,
            vErrorMessage: action.verrMess
        }
        case Type.removeErrorMess:
        return state = {
            ...state,
            vErrorFlag: false,
            vErrorMessage: "",
        }
        case Type.logOut:
        return state;
        case Type.remove :
            return state = {
                ...state,
                errorMessage: "",
        }
        case Type.pervDataOfAllUsers:
            return {
                ...state,
                allUsers: action.userData,
            }
        default:
        return state;
    }
    
}
export default  authReducer;