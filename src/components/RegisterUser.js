// src/components/RegisterUser.js
import React, { useState } from 'react';
import './scss/registerlayout.scss';

const RegisterUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        setMessage(''); // Reset success message

        // Debugging: Check form submission
        console.log("Form submitted"); 

        // Simple validation
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            console.log("Passwords do not match"); // Debugging message
            return;
        }

        // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log("Current users:", users); // Debugging message

        const userExists = users.find((user) => user.email === email);

        if (userExists) {
            setError("User already exists.");
            console.log("User already exists"); // Debugging message
        } else {
            // Save new user to local storage
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            setMessage("Registration successful! You can now log in.");
            console.log("User registered successfully"); // Debugging message

            // Reset fields after registration
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <section className="register_item">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-6 register_fields">
                        <h2>Register</h2>
                        {message && <p className="success">{message}</p>}
                        {error && <p className="error">{error}</p>}
                        <form onSubmit={handleRegister}>
                            <div>
                                <label>Email: </label>
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
                            <div>
                                <label>Confirm Password: </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Register</button>
                        </form>
                        <p>
                            Already have an account? <a href="/login">Login here</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterUser;
