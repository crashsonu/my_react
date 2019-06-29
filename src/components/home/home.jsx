import React from "react"
import SigninCls from 'components/signin_comp/sign_in'
import SignupCls from 'components/signup_comp/sign_up'
import './style_home.css'


class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <SignupCls/>;
                    </div>
                    <div className="col-md-6">
                        <SigninCls/>;
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
