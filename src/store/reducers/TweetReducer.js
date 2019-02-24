import Type from "../const/Type";
const initState = {
    allTweets: [],

}
export const TweetReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.pervDataOfTweets:
            return state = {
                ...state,
                allTweets: action.pervDataOfTweets,
            }
        case Type.addNewTweet: 
        return state;
        default:
            return state;
    }
};