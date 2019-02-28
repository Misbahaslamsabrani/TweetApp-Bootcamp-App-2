import Type from "../const/Type";
const initState = {
    allTweets: [],
    allReplies: [],
    allLikes: [],
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
        case Type.pervDataOfLikes:
        return state = {
            ...state,
            allLikes: action.allLikes,
        }
        case Type.addNewTweet:
            return state;
        case Type.addNewReply:
            return state;
        case Type.likedTweet:
        return state;
        default:
            return state;
    }
};