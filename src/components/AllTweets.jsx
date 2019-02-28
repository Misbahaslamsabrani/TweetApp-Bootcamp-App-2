import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from "./Loader/Loader"
import { Liked_Tweet, UnLiked_Tweet } from '../store/actions/TweetActions';
class AllTweets extends Component {
    unLikeTweet = (likes, id) => {
        const likeObj = likes.find(v => v.TweetId === id)
        this.props.unLike(likeObj.LikedId);
    }
    render() {
        return (
            this.props.user? (<div className="container">
                <div className="row">
                    <div className="col l12 s12 m12">
                        <ul className="collection with-header myCollections">
                            <li className="collection-header">
                            <h3 className="blue-text hide-on-small-only">All Tweets</h3>
                            <h5 className="blue-text hide-on-med-and-up">All Tweets</h5>
                            </li>
                            {this.props.allTweets.length > 0 ? (this.props.allTweets.map(v => 
                            <li key={v.TweetId} className="collection-item myCollections">
                            <span className="title"><b>{v.tweetBy}</b> </span>
                            <p className="grey-text text-darken-4">{v.tweet}</p>
                            {this.props.allLikes.filter(r => r.TweetId === v.TweetId).length > 0 ? (<span className="badge grey white-text">
                            {this.props.allLikes.filter(r => r.TweetId === v.TweetId).length}</span>) : (null)}
                            {this.props.SpecificUserLikes.some(l => l.TweetId === v.TweetId) ? (<button className="btn-floating transparent secondary-content" >
                              <i className="material-icons red-text text-lighten-1" onClick={() => this.unLikeTweet(this.props.SpecificUserLikes, v.TweetId)}>favorite</i>
                            </button>) : (<button className="btn-floating transparent secondary-content" >
                              <i className="material-icons blue-text text-lighten-1" onClick={() => {this.props.like({likedBy: this.props.user.uid, TweetId: v.TweetId})}}>favorite_border</i>
                            </button>)}
                            <span className="secondary-content hide-on-small-only">
                            &nbsp; 
                            &nbsp;
                            </span>
                            <button className="btn-floating transparent secondary-content">
                              <i className="material-icons blue-text text-lighten-1" onClick={() => {this.props.history.push(`/reply/${v.TweetId}`)}}>reply</i>
                            </button>
                            {this.props.allReplies.filter(r => r.TweetId === v.TweetId).length > 0 ? (<span className="badge grey white-text">
                            {this.props.allReplies.filter(r => r.TweetId === v.TweetId).length}</span>) : (<span className="secondary-content hide-on-small-only">
                            &nbsp; 
                            &nbsp;
                            </span>)}
                            <button className="btn-floating transparent secondary-content">
                              <i className="material-icons blue-text text-lighten-1 myBtn" onClick={() => {this.props.history.push(`/allReplies/${v.TweetId}`)}}>chat</i>
                            </button>
                            <br/>
                            <br/>
                            <hr/>
                            </li>
                            ).reverse()) : (<li key={"noTweet"} className="collection-item">Sorry, No Tweets.</li>)}
                        </ul>
                    </div>
                </div>
            </div>) : (<Loader />)
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        like: (obj) => dispatch(Liked_Tweet(obj)),
        unLike: (lid) => dispatch(UnLiked_Tweet(lid)),
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        allTweets: state.tweet.allTweets,
        allLikes: state.tweet.allLikes,
        allReplies: state.tweet.allReplies,
        SpecificUserLikes: state.tweet.allLikes.filter(v => v.likedBy === state.auth.currentUser.uid),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllTweets);