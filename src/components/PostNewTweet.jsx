import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ADD_NEW_TWEET} from "../store/actions/TweetActions";
import Loader from './Loader/Loader';
class PostNewTweet extends Component {
    state = {Tweet: ""}
    whenPost = () => {
        this.props.addNewTweet({userId:this.props.user.uid,
            tweet: this.state.Tweet, tweetBy: this.props.SpecificUser.name})
        this.setState({Tweet: ""})
        this.props.history.push("/")
    }
    whenEmpty = () => {
        return this.state.Tweet === ""
    }
    render() {
        return (
           this.props.user ? ( <div className="container">
           <br/>
           <br/>
               <div className="row">
                   <div className="col l8 s12 m8 offset-l2 z-depth-2">
                               <div className="input-field">
                                   <textarea name="Tweet" placeholder="What's happening?" id="teet" className="materialize-textarea" value={this.state.Tweet} onChange={(event) => this.setState({Tweet: event.target.value})}></textarea>
                               </div>
                               <button className="btn blue lighten-2 right" disabled={this.whenEmpty()} onClick={this.whenPost}>Tweet</button>
                               <br/>
                               &nbsp;
                   </div>
               </div>
           </div>) : (<Loader />)
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addNewTweet: (obj) => dispatch(ADD_NEW_TWEET(obj)),
    }
}
const mapStateToProps = (state) => {
    return{
        user: state.auth.currentUser,
        SpecificUser: state.auth.allUsers.find(v => v.userId === state.auth.currentUser.uid)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostNewTweet);