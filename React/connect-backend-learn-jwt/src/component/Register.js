import axios from 'axios';
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post('http://localhost:8003/users/register', {
        username: username,
        password: password,
        email: email,
        confirmPassword: confirmPassword,
      });
      console.log(res.data);
      setPassword('');
      setEmail('');
      setUsername('');
      setConfirmPassword('');
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className='container bg-light p-3 shadow mt-3'>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmitForm}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email address'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            placeholder='Password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='confirmPassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-control'
            placeholder='Confirm Password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
