import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader/Loader';
const allReplies = (props) => {
    const goBack = () => {
        props.history.push("/")
    }
    return (
        props.user ? (<div className="container"><div className="grey-text underline form_a" onClick={goBack}> &nbsp;
        <i className="material-icons">arrow_back</i></div>
            <div className="row">
                <div className="col s12 m12 l6 offset-l3">
                    <div className="card">
                        <div className="card-image">
                            <span className="btn-floating halfway-fab waves-effect waves-light blue lighten-1" onClick={() => {props.history.push(`/reply/${props.SpecififcTweet.TweetId}`)}}><i className="material-icons">edit</i></span>
                        </div>
                        <div className="card-content">
                        {props.allTweets.length > 0 ? (<div className="card-title">
                        <b>{props.SpecififcTweet.tweetBy} </b><span>{props.SpecififcTweet.tweet}</span>
                        </div>) : (null)}
                        {props.SpecificReplies.length > 0 ? (<ul className="collection">{props.SpecificReplies.map(v => <li key={v.ReplyId} className="collection-item">
                        <span className="grey-text">Reply by </span><b className="blue-text">{v.replyBy} </b>
                        <br/>
                        <span>{v.reply}</span>
                        </li>)}</ul>) : (null)}
                        </div>
                    </div>
                </div>
            </div></div>) : (<Loader/>)
    );
}
const mapStateToProps = (state,ownProps) => {
    const paramsTweetId = ownProps.match.params.id;
    const SpecififcTweet = state.tweet.allTweets.find(v => v.TweetId === paramsTweetId)
    return{
        allTweets: state.tweet.allTweets,
        user: state.auth.currentUser,
        SpecififcTweet,
        SpecificUser: state.auth.allUsers.find(v => v.userId === state.auth.currentUser.uid),
        SpecificReplies: state.tweet.allReplies.filter(v => v.TweetId === SpecififcTweet.TweetId),
    }
}
export default connect(mapStateToProps)(allReplies);