import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader/Loader';
import { ADD_NEW_REPLY } from '../store/actions/TweetActions';
class Reply extends Component {
    constructor() {
        super();
        this.state = {
            TweetId: '',
            Reply: "",
        }
    }
    componentDidMount() {
        this.setState({ TweetId: this.props.match.params.id })
    }
    whenEmpty = () => {
        return this.state.Reply === ""
    }
    whenReply = () => {
        this.props.SubmitReply({
            reply: this.state.Reply,
            replyBy: this.props.SpecificUser.name,
            TweetId: this.state.TweetId
        })

        this.setState({ Reply: "", TweetId: "" })
        this.props.history.push("/")
    }
    goBack = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            this.props.user ? (<div className="container">
                <div className="grey-text underline form_a" onClick={this.goBack}> &nbsp;
                    <i className="material-icons">arrow_back</i></div>
                <br />
                <br />
                {this.props.allTweets.length > 0 ? (
                    <div className="row">
                        <div className="col l8 s12 m12 offset-l2">
                            <div className="z-depth-2">
                                <div> &nbsp; &nbsp; <span className="grey-text text-darken-1 flow-text">Repling to </span><span className="blue-text flow-text">{this.props.SpecififcTweet.tweetBy}</span></div>
                                <div className="row">
                                    <div className="col l6 s12 offset-l1">
                                        <textarea name="Reply" placeholder="Type your reply. . . " id="teet" cols="30" rows="10" className="materialize-textarea" value={this.state.Reply} onChange={(event) => this.setState({ Reply: event.target.value })}></textarea>
                                    </div>
                                    <div className="col l3 s12">
                                        <button className="btn-small blue lighten-2" disabled={this.whenEmpty()} onClick={this.whenReply}>Reply</button>
                                    </div>
                                </div>
                                <br />
                                &nbsp;
                </div>
                        </div>
                    </div>) : (<Loader />)}
            </div>) : (<Loader />)
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const paramsTweetId = ownProps.match.params.id;
    const SpecififcTweet = state.tweet.allTweets.find(v => v.TweetId === paramsTweetId)
    return {
        allTweets: state.tweet.allTweets,
        user: state.auth.currentUser,
        SpecififcTweet,
        SpecificUser: state.auth.allUsers.find(v => v.userId === state.auth.currentUser.uid),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SubmitReply: (obj) => dispatch(ADD_NEW_REPLY(obj)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Reply);