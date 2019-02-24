import React, { Component } from 'react';
import { connect } from 'react-redux';
class YourTweets extends Component {
    state = {  }
    render() {
        return (
            <div className="container"></div>
        );
    }
}

export default connect()(YourTweets);