// src/components/Loginuser.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './scss/loginlayout.scss';

const Loginuser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log("Current users:", users); // Debugging message

        // Check if any user matches the entered credentials
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            // Redirect to home or dashboard
            navigate('/dashboard'); // Change to your target route after login
        } else {
            setError('Invalid email or password.'); // Display error message
            console.log("Invalid credentials"); // Debugging message
        } 
    }; 

    return (
        <section className="login_item">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col col-5 login_bg">
                        <img src={`${process.env.PUBLIC_URL}/login-bg.jpg`} alt="From Public" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="col col-5 login_fields">
                        <h2>Login</h2>
                        {error && <p className="error">{error}</p>} {/* Display error message */}
                        <form onSubmit={handleLogin}>
                            <div>
                                <label>Email Address: </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Password: </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <p class="mt-4">
                            Don't have an account? <a href="/register">Register here</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Loginuser;
