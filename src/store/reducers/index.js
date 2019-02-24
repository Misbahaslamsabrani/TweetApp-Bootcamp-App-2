import {combineReducers} from "redux"
import authReducer from "./authReducer";
import SignInReducer from "./SignInReducer";
import SignUpReducer from "./SignUpReducer";
import { TweetReducer } from "./TweetReducer";
const rootReducer = combineReducers({
    auth: authReducer,
    signIn: SignInReducer,
    signUp: SignUpReducer,
    tweet: TweetReducer,

})
export default rootReducer;