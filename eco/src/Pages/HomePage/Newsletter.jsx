import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post('https://mern-ecom-4uin.onrender.com/api/users', {
        email, // sending email to backend
        title: 'Newsletter Subscription',
        image: '', // Optional fields if required
        price: 0,  // Optional
        gender: '', // Optional
        color: '',  // Optional
        categories: 'newsletter' // Optional
      });

      setMessage('Subscription successful! Check your inbox for a confirmation email.');
      setEmail('');
    } catch (error) {
      setMessage('There was an error subscribing. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Let's keep in touch</h2>
      <p className="subscribe__copy">
        Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form__email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" className="form__button">
          Send
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Newsletter;
