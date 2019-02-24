import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ADD_NEW_TWEET} from "../store/actions/TweetActions";
class PostNewTweet extends Component {
    state = {Tweet: ""}
    render() {
        return (
            <div className="container">
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
                                <button className="btn blue lighten-2" onClick={() => this.props.addNewTweet(this.state.Tweet)}>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addNewTweet: (name) => dispatch(ADD_NEW_TWEET(name)),
    }
}
export default connect(null, mapDispatchToProps)(PostNewTweet);