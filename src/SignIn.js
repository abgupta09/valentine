// src/SignIn.js
import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const storedUsername = 'Anugya'; // Replace with your chosen username
  const storedPassword = 'Abhishek'; // Replace with your chosen password

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username === storedUsername && password === storedPassword) {
      onSignIn(true);
    } else {
      alert('Incorrect Username or Password!');
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
