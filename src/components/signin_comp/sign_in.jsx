import React from 'react'
import Contacts from './media/contacts.jpg'
import './style_signin.css'


class SigninCls extends React.Component {
    render() {
        return (
            <div className="signInBox">
                <img src={Contacts} alt='a contacts' className="icon"/><br/><br/>
                <h1>SignIn Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="Uname" placeholder="Enter Username"/>
                    <p>Password</p>
                    <input type="password" name="pass" placeholder="Enter Password"/><br/><br/>
                    <input type="submit" name="sub" value="SignIn"/><br/>
                    <a href="https://www.google.co.in">Lost your password? &nbsp; &nbsp; </a><br/>
                    <a href="https://www.google.co.in">Click here for SignUp.</a>
                </form>
            </div>
        )
    }
}

export default SigninCls;
