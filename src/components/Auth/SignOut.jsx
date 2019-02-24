import React, { Fragment } from 'react';
import An from '../../UIComponents/An';
import { connect } from "react-redux"
import { LOGOUT } from "../../store/actions/authActions"

const SignOut = (props) => {
    const whenClick = () => {
        props.history.push("/");
        props.logOut()
    }
    const WhenClick = () => {
      props.history.push("/");
    }
    return (<Fragment>
        {props.User ? (<div className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col s10 m6 l6 offset-l3 offset-m2">
                    <div className="card grey lighten-4">
                        <div className="card-content">
                            <b className="card-title pink-text">Sign out</b>
                            <p className="Black-text">Are you sure, You want to Sign out?</p>
                        </div>
                        <div className="card-action">
                            <An cn="btn-small black-text pink white-text" t="Cancel" oc={WhenClick} />
                            &nbsp; &nbsp; &nbsp;
                        <An cn="btn-small black-text pink white-text" t="Sign out" oc={whenClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>) : (null)}</Fragment>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(LOGOUT())
    }
}
const mapStateToProps = (state) => {
    return {
        User: state.auth.currentUser,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);