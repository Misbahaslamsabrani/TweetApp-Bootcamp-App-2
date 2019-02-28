import React, { Component }from 'react';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { PervDataOfAllUsers, LOGOUT } from '../store/actions/authActions';
import { PervDataOfAllTweets, PervDataOfAllReplies, PervDataOfAllLikes } from '../store/actions/TweetActions';
class NavBar extends Component{
    componentDidMount(){
        this.props.allUsers();
        this.props.allTweets();
        this.props.allReplies();
        this.props.allLikes();
    }
    render(){
        return (
            this.props.user ? (<nav className="blue lighten-1"><div className="container">
            <div className="brand-logo hide-on-small-only">Tweet App</div>
            <span className="hide-on-med-and-up">Tweet App</span>
            <ul className="right">
            <li>
                <NavLink to="/" className='btn btn-floating blue lighten-1'><i className="material-icons white-text">home</i></NavLink>
            </li>
            <li>
                <NavLink to="/newTweet" className='btn btn-floating blue lighten-1'><i className="material-icons white-text">edit</i></NavLink>
            </li>
            <li>
                <a href="JavaScript:void(0)" className='btn btn-floating blue lighten-1'><i className="material-icons white-text" onClick={() => {
                    this.props.logOut()}}>exit_to_app</i>
                </a>
            </li>
            
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
      allReplies: () => dispatch(PervDataOfAllReplies()),
      allLikes: () => dispatch(PervDataOfAllLikes()),
      logOut: () => dispatch(LOGOUT()),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);