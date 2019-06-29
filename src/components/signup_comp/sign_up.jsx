import React from "react"
import Contacts from './media/contacts.jpg'
import './style_signup.css'

class SignupCls extends React.Component {
    render() {
        return (
            <div className="signUpBox">
                <img src={Contacts} alt='a contacts' className="icon"/><br/><br/>
                <h1>Register</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="userame" placeholder="Enter Username" id="button"/><br/><br/>
                    <p>Age</p>
                    <input type="number" name="age" value="" placeholder="18"/><br/><br/>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Enter password" id="button" required/><br/><br/>
                    <p>Re-Enter Password</p>
                    <input type="password" name="password" placeholder="Confirm Password " id="button"
                           required/><br/><br/>
                    <p>Gender</p>
                    <input type="radio" name="gender" value="male" id="gen" checked/><span id="gender">Male </span>
                    <input type="radio" name="gender" value="female" id="gen"/><span id="gender">Female </span>
                    <input type="radio" name="gender" value="other" id="gen"/><span id="gender">Other </span><br/><br/>
                    <input type="submit" value="Register" id="Register"/> <br/><br/><br/>
                    <a href="https://www.google.co.in">Already registered? Click to signIn</a>
                </form>

            </div>
        )
    }
}


export default SignupCls;