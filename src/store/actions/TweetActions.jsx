import Type from "../const/Type";
import "../../config";
import * as firebase from "firebase";

export const ADD_NEW_TWEET = (Obj) => {
    return dipatch => {
        firebase.database().ref().child("Tweets").push(Obj)
        dipatch({type: Type.addNewTweet})
    }
}

export const ADD_NEW_REPLY = (obj) => {
    return dispatch => {
        firebase.database().ref().child("Replies").push(obj)
        dispatch({type: Type.addNewReply})
    }
}

export const Liked_Tweet = (obj) => {
    return dispatch => {
        firebase.database().ref().child("Likes").push(obj)
        dispatch({type: Type.likedTweet})
    }
}
export const UnLiked_Tweet = (lid) => {
    return dispatch => {
        firebase.database().ref().child(`Likes/${lid}`).remove();
        dispatch({type: Type.likedTweet})
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
                    tweetBy: data[key].tweetBy,
                })
            }
            dispatch({ type: Type.pervDataOfTweets, allTweets: TemArr })
        })
    }
}
export const PervDataOfAllReplies = () => {
    return dispatch => {
        firebase.database().ref().child("Replies").on("value", (snapshot) => {
            const data = snapshot.val()
            const TemArr = []
            for (let key in data) {
                TemArr.push({
                    ReplyId: key,
                    TweetId: data[key].TweetId,
                    reply: data[key].reply,
                    replyBy: data[key].replyBy,
                })
            }
            dispatch({ type: Type.pervDataOfReplies, allReplies: TemArr })
        })
    }
}
export const PervDataOfAllLikes = () => {
    return dispatch => {
        firebase.database().ref().child("Likes").on("value", (snapshot) => {
            const data = snapshot.val()
            const TemArr = []
            for (let key in data) {
                TemArr.push({
                    LikedId: key,
                    TweetId: data[key].TweetId,
                    likedBy: data[key].likedBy,
                })
            }
            dispatch({ type: Type.pervDataOfLikes, allLikes: TemArr })
        })
    }
}

