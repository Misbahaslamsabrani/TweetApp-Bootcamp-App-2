import Type from "../const/Type";
const initState = {
    allTweets: [],
    allReplies: [],
}
export const TweetReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.pervDataOfTweets:
            return state = {
                ...state,
                allTweets: action.allTweets,
            }
        case Type.pervDataOfReplies:
            return state = {
                ...state,
                allReplies: action.allReplies,
            }
        case Type.addNewTweet:
            return state;
        case Type.addNewReply:
            return state;
        default:
            return state;
    }
};