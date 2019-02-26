import React, { Component }from 'react';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { PervDataOfAllUsers } from '../store/actions/authActions';
import { PervDataOfAllTweets } from '../store/actions/TweetActions';
class NavBar extends Component{
    componentDidMount(){
        this.props.allUsers();
        this.props.allTweets();
    }
    render(){
        return (
            this.props.user ? (<nav className="blue lighten-1"><div className="container">
            <div className="brand-logo">Tweet App</div>
            <ul className="right">
                <li><NavLink to="/">All Tweets</NavLink></li>
                <li><NavLink to="/newTweet">New Tweet</NavLink></li>
            </ul>
            </div>
            </nav>) : (null)
        );
    }
}
const mapStateToProps = (state) => {
    return{
      user: state.auth.currentUser,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      allUsers: () => dispatch(PervDataOfAllUsers()),
      allTweets: () => dispatch(PervDataOfAllTweets()),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);