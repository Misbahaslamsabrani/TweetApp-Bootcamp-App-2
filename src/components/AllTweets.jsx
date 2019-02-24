import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllTweets extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col l6 s12 m6">
            <ul className="collection with-header">
            <li className="collection-header"><h3 className="blue-text">{this.props.user}'s Tweets</h3></li>
            <li className="collection-item">You have Posted {} Tweets.</li>
            <li className="collection-item">You didn't post any Tweet.</li>
            </ul>
            </div>
            <div className="col l6 s12 m9">
            <ul className="collection with-header">
            <li className="collection-header"><h3 className="blue-text">All Tweets</h3></li>
            <li className="collection-item">Sorry, No Tweets.</li>
            </ul>
            </div>
            </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{}
}
const mapStateToProps = (state) => {
    return{ user: state.user.user}
}
export default connect(mapStateToProps, mapDispatchToProps)(AllTweets);