import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ADD_NEW_TWEET} from "../store/actions/TweetActions";
import Loader from './Loader/Loader';
class PostNewTweet extends Component {
    state = {Tweet: ""}
    whenPost = () => {
        this.props.addNewTweet({userId:this.props.user.uid ,
            tweet: this.state.Tweet, tweetBy: this.props.SpecificUser.name, reply: null, like: null})
        this.setState({Tweet: ""})
    }
    whenEmpty = () => {
        return this.state.Tweet === ""
    }
    render() {
        console.log(this.props.SpecificUser, this.props.user)
        return (
           this.props.user ? ( <div className="container">
           <br/>
           <br/>
               <div className="row">
                   <div className="col l8 s12 m8 offset-l2">
                       <div className="card blue lighten-5">
                           <div className="card-content">
                               <div className="card-title blue-text lighten-1">
                                   Post New Tweet
                               </div>
                               <div className="input-field">
                                   <textarea name="Tweet" id="teet" cols="30" rows="10" className="materialize-textarea" value={this.state.Tweet} onChange={(event) => this.setState({Tweet: event.target.value})}></textarea>
                                   <label htmlFor="tweet">Enter your tweet</label>
                               </div>
                               <div className="card-action">
                               <button className="btn blue lighten-2" disabled={this.whenEmpty()} onClick={this.whenPost}>Post</button>
                               </div>
                           </div>
                       </div>
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