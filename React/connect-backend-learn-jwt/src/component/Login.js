import React, { useState } from 'react';
import axios from 'axios';
// "Bom@1234"

function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post('http://localhost:8003/users/login', {
        usernameOrEmail: emailOrUsername,
        password: password,
      });
      console.log(res.data);
      localStorage.setItem('TOKEN', res.data.token);
      setPassword('');
      setEmailOrUsername('');
    } catch (err) {
      if (err.response?.status === 400) {
        setError(err.response.data.message);
      }
      // console.dir(err);
    }
  };

  return (
    <div className='container bg-light p-3 shadow mt-3' style={{ maxWidth: '50%' }}>
      <h1>Log In Page</h1>
      <form onSubmit={handleSubmitForm}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address or Username
          </label>
          <input
            type='text'
            className='form-control'
            id='email'
            value={emailOrUsername}
            onChange={(e) => {
              setEmailOrUsername(e.target.value);
              setError('');
            }}
            placeholder='Email address or Username'
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
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Log in
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
