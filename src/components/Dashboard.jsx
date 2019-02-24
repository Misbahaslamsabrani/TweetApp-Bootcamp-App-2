import React, { Component, Fragment } from 'react';
import SignUPIN from './Auth/SignUPIN';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={showSignUp: false,
        showDashBoard: true}
    }
    onContinue = () => {
        this.setState({showSignUp: true, showDashBoard: false})
    }
    goBack = () => {
        this.setState({showDashBoard: true, showSignUp: false})
    }
    render() {
        return (
            <Fragment>
        {this.state.showDashBoard ? ( <div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
                <div className="row blue lighten-5">
                    <div className="col l8 s12 m12 offset-l2">
                        <h2 className="blue-text text-lighten-1 center">Welcome To Tweet App</h2>
                        <p className="center flow-text">
                            <b className="red-text text-lighten-1">Note: </b>
                            In order to use App, Please <button className="btn-small blue lighten-2" onClick={this.onContinue}>Continue</button>
                        </p>
                    </div>
                    <div className="col l12 s12 m12">
                <br/>
                </div>
                </div>
            </div>) : (null)}
           {this.state.showSignUp ? (<SignUPIN />): (null)}
           </Fragment>
        );
    }
}

export default Dashboard;