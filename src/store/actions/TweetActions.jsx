import Type from "../const/Type";

export const ADD_NEW_TWEET = (tweet) => {
    return dipatch => {
        
        dipatch({type: Type.addNewTweet})
    }
}