import React, { Component } from 'react';
import Button from '../../UIComponents/Button'
import InputS from '../../UIComponents/InputS';
import An from '../../UIComponents/An';
import './SignUp_In.css'
import { connect } from "react-redux"
import { LOGIN, error, SIGNUP } from '../../store/actions/authActions';
import Type from '../../store/const/Type';
import { Validation, RemoveErrorMessages } from "../../store/actions/authActions";
class SignUPIN extends Component {
    constructor() {
        super();
        this.state = {
            UserEmailS: '',
            UserPassS: '',
            Name: "",
            UserEmailL: '',
            UserPassL: '',
            SignUp: false,
            LogIn: true,
        }
    }
    onAdd = (event) => {
        event.preventDefault();
        if (this.state.LogIn) {
            if (this.state.UserEmailL === '') {
                this.props.LoginVE()
                return
            }
            else if (this.state.UserPassL === '') {
                this.props.LoginVP()
                return
            }
            this.props.logIn(this.state.UserEmailL, this.state.UserPassL);
        }
        else if (this.state.SignUp) {
            if (this.state.Name === "") {
                this.props.valide("Please enter your name.")
                return
            }
            else if (this.state.Name.length > 15) {
                this.props.valide("Please enter your name properly.")
                return
            }
            else if (this.state.Name.length < 2) {
                this.props.valide("Please enter your name properly.")
                return
            }
            else if (this.state.UserEmailS === '') {
                this.props.SignUpVE()
                return
            }
            else if (this.state.UserPassS === '') {
                this.props.SignUpVP()
                return
            }
            this.props.signUp(this.state.UserEmailS, 
            this.state.UserPassS, 
            this.state.Name);
        }
    }
    whenChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        this.props.error();
        this.props.error2();
    }
    whenClick = () => {
        this.setState({
            UserEmailL: '',
            UserPassL: '',
            SignUp: true,
            LogIn: false,
            Name: "",
        })
    }
    WhenClick = () => {
        this.setState({
            UserEmailS: '',
            UserPassS: '',
            SignUp: false,
            LogIn: true,
        })
    }

    render() {
        return (<div>
            <nav className="nav-wrapper pink darken-1">
                <div className="container">
                    <span className="brand-logo hide-on-small-only">Real-time Parking Booking System</span>
                    <span className="hide-on-med-and-up">Real-time Parking Booking System</span>
                </div>
            </nav>
            <br />
            <br />
            <div className="container">
                {this.state.LogIn ? (<div className="row">
                    <div className="col s12 m6 l6 offset-l3 offset-m3">
                        <div className="card z-depth-2">
                            <form onSubmit={this.onAdd}>
                                <div className="card-content grey lighten-4">
                                    <div className="card-title z-depth-1 center pink  white-text">Sign In</div>
                                    <br />
                                    <div className="row">
                                    <InputS n="UserEmailL" v={this.state.UserEmailL} t="text" oc={this.whenChange} f="lemail" e={this.props.lemail} m={this.props.lmess} d="lemail" l="Email" />
                                    <InputS n="UserPassL" v={this.state.UserPassL} t="password" oc={this.whenChange} f="pass" p={this.props.lpass} m={this.props.lmess} d="pass" l='Password' />
                                    </div>
                                </div>
                                <div className="card-action grey lighten-4">
                                    <Button cn="btn form_bu pink" t="Sign In" />
                                    <span className="grey-text darken-1">Don't have an account?</span>  &nbsp; <An cn="pink-text text-darken-1 form_a text" t="Register here" oc={this.whenClick} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>) : (null)}
                {this.state.SignUp ? (<div className="row">
                    <div className="col s12 m6 l6 offset-l3 offset-m3">
                        <div className="card z-depth-2">
                            <form onSubmit={this.onAdd}>
                                <div className="card-content grey lighten-4">
                                    <div className="card-title z-depth-1 center pink  white-text">Register New User</div>
                                    <br />
                                    <div className="row">
                                    <InputS n="Name" v={this.state.Name} t="text" oc={this.whenChange} f="name" d="name" l="Name" />
                                    <InputS n="UserEmailS" v={this.state.UserEmailS} t="text" oc={this.whenChange} f="semail"  d="semail" l="Email" />
                                    <InputS n="UserPassS" v={this.state.UserPassS} t="password" oc={this.whenChange} f="pass"  d="pass" l='Password' />
                                    {this.props.errFlag ? (
                                            <div className="col l12 s12 center red-text">
                                                <h6>{this.props.errmess}
                                                </h6>
                                            </div>
                                    ) : (null)}
                                    {this.props.semail ? (
                                            <div className="col l12 s12 center red-text">
                                                <h6>{this.props.smess}
                                                </h6>
                                            </div>
                                    ) : (null)}
                                    {this.props.spass ? (
                                            <div className="col l12 s12 center red-text">
                                                <h6>{this.props.smess}
                                                </h6>
                                            </div>
                                    ) : (null)}
                                    </div>
                                </div>
                                <div className="card-action grey lighten-4">
                                    <Button cn="btn form_bu pink " t="Register" />
                                    <span className="grey-text darken-1">Already have an account?</span> &nbsp; <An cn="pink-text text-darken-1 form_a text" t="Sign In" oc={this.WhenClick} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>) : (null)}
            </div>
        </div>)
    }
}
const mapdispatchToProps = (dispatch) => {

    return {
        logIn: (email, pass) => dispatch(LOGIN(email, pass)),
        error: () => dispatch(error()),
        signUp: (email, pass, name) => dispatch(SIGNUP(email, pass, name)),
        LoginVE: () => dispatch({ type: Type.logInVE }),
        LoginVP: () => dispatch({ type: Type.logInVP }),
        SignUpVE: () => dispatch({ type: Type.SignUpVE }),
        SignUpVP: () => dispatch({ type: Type.SignUpVP }),
        SignUpVS: () => dispatch({ type: Type.SignUpVS }),
        valide: (message) => dispatch(Validation(message)),
        error2: () => dispatch(RemoveErrorMessages()),
    }
}
const mapStateToProps = (state) => {
    return {
        lemail: state.signIn.email,
        lpass: state.signIn.pass,
        lmess: state.signIn.errorMessage,
        semail: state.signUp.email,
        spass: state.signUp.pass,
        smess: state.signUp.errorMessage,
        signUpUser: state.signUp.signUpUser,
        errmess: state.auth.vErrorMessage,
        errFlag: state.auth.vErrorFlag,
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(SignUPIN);
