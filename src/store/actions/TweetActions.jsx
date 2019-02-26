import Type from "../const/Type";
import "../../config";
import * as firebase from "firebase";

export const ADD_NEW_TWEET = (Obj) => {
    return dipatch => {
        firebase.database().ref().child("Tweets").push(Obj)
        dipatch({type: Type.addNewTweet})
    }
}

export const PervDataOfAllTweets = () => {
    return dispatch => {
        firebase.database().ref().child("Tweets").on("value", (snapshot) => {
            const data = snapshot.val()
            const TemArr = []
            for (let key in data) {
                TemArr.push({
                    TweetId: key,
                    userId: data[key].userId,
                    tweet: data[key].tweet,
                    reply: data[key].reply,
                    tweetBy: data[key].tweetBy,
                    like: data[key].like,
                })
            }
            console.log(TemArr)
            dispatch({ type: Type.pervDataOfTweets, allTweets: TemArr })
        })
    }
}