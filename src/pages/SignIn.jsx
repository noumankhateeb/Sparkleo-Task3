import React from 'react';
import './SignIn.css';
import BrandOverlay from '../components/BrandOverlay';

const SignIn = () => {
    return (
        <div className="signin-page">

            <div className="signin-left">

                <div className='container'>

                    <div className='back-to-dashboard'>
                        <button className='back-button'>
                            <img className='back-icon' src='./back.png' alt='back' />
                            Back
                        </button>
                    </div>

                    <form>
                        <h1 className='form-heading'>Sign In</h1>
                        <p className='sign-text'>Enter your email and password to sign in!</p>

                        <div className="separator">
                            <hr className="line" />
                            <span className="or-text">or</span>
                            <hr className="line" />
                        </div>

                        <label>Email*</label>
                        <input type="email" placeholder="mail@simmmple.com" required />

                        <label>Password*</label>
                        <input type="password" placeholder="Min. 8 characters" required />

                        <div className="form-options">
                            <label className='checkbox-text'>
                                <input type="checkbox" className='custom-checkbox' /> Keep me logged in
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className='submit-button'>Sign In</button>

                        <p className='create-account-text'>
                            Not registered yet? <a href="#">Create an Account</a>
                        </p>
                    </form>

                    <div className='copyright'>
                        © 2023 Spark Drive. All Rights Reserved.
                    </div>

                </div>

            </div>

            <div className="signin-right">
                <BrandOverlay />
            </div>

        </div>
    );
};

export default SignIn;
