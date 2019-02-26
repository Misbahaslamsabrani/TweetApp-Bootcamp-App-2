import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from "./Loader/Loader"
class AllTweets extends Component {
    render() {
        return (
            this.props.user? (<div className="container">
                <div className="row">
                    <div className="col l12 s12 m12">
                        <ul className="collection with-header">
                            <li className="collection-header"><h3 className="blue-text">All Tweets</h3></li>
                            {this.props.allTweets.length > 0 ? (this.props.allTweets.map(v => 
                            <li key={v.TweetId} className="collection-item">
                            <span className="title">{v.tweetBy}: </span>
                            <p className="grey-text">{v.tweet}</p>
                            <button className="btn-floating transparent secondary-content" >
                              <i className="material-icons blue-text text-lighten-1" onClick={() => {console.log("like")}}>favorite_border</i>
                            </button>
                            <button className="btn-floating transparent secondary-content" >
                              <i className="material-icons blue-text text-lighten-1" onClick={() => {console.log("reply")}}>reply</i>
                            </button> 
                            </li>
                            )) : (<li key={"noTweet"} className="collection-item">Sorry, No Tweets.</li>)}
                        </ul>
                    </div>
                </div>
            </div>) : (<Loader />)
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        allTweets: state.tweet.allTweets,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllTweets);