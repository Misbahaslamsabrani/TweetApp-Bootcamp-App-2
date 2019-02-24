import React, { Component,Fragment } from 'react';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import PostNewTweet from './components/PostNewTweet';
import AllTweets from './components/AllTweets';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.user ? (<Router>
          <Fragment>
            <NavBar />
          <Switch>
            <Route exact path="/newTweet" component={PostNewTweet} />
            <Route exact path="/" component={AllTweets} />
          </Switch>
          </Fragment>
        </Router>): (<Dashboard />)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    user: null
  }
}
export default connect(mapStateToProps)(App);
