import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';
import BrandOverlay from '../components/BrandOverlay';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/auth/login', {
                email: email,
                password: password
            });

            const token = response.data.token;
            console.log('JWT Token:', token);
            setMessage('Login successful!');
            localStorage.setItem('token', token); // Store the token for later use
        } catch (error) {
            console.log(error);
            console.error('Error during login:', error);
            if (error.response && error.response.status === 401) {
                setMessage(error.response.data.message); // Display error message
            } else {
                setMessage('An error occurred during login.');
            }
        }
    };

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

                    <form onSubmit={handleSubmit}>
                        <h1 className='form-heading'>Sign In</h1>
                        <p className='sign-text'>Enter your email and password to sign in!</p>

                        <div className="separator">
                            <hr className="line" />
                            <span className="or-text">or</span>
                            <hr className="line" />
                        </div>

                        <label>Email*</label>
                        <input
                            type="email"
                            placeholder="mail@simmmple.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Password*</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"} 
                                placeholder="Min. 8 characters"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <img className='eye-icon' src='./hide.png' /> : <img  className='eye-icon'  src='./show.png' />}
                            </span>
                        </div>

                        <div className="form-options">
                            <label className='checkbox-text'>
                                <input type="checkbox" className='custom-checkbox' /> Keep me logged in
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>

                        {message &&
                            <p id="message" className="message-text" style={{ color: message !== "Login successful!" ? "#E92928" : "green" }}>{message}</p>
                        }

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
