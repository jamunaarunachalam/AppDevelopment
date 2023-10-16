import React, { useState } from 'react';
import './FeedbackForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nave from './Nave';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbacktext, setFeedbacktext] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const details={name,email,feedbacktext}
  const nav=useNavigate("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbacktextChange = (e) => {
    setFeedbacktext(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      if(name.length==0 && email.length==0 && feedbacktext.length==0)
       {
         alert("Enter name,email and message")
       }
       else if(name.length===0)
       {
         alert("Enter Name")
       }
       else if(email.length===0)
       {
         alert("Enter email");
       }
       else if(feedbacktext.length===0)
       {
         alert("Enter message");
       }
       else 
       {
         axios.post("http://localhost:8082/feedback/submit",{name,email,feedbacktext});
         nav("/");
     
       }
     }
    setSubmitted(true);
  };

  return (
    <div className="feedback-form">
      <h2>FEEDBACK FORM</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="feedback">Please share your feedback:</label>
          <textarea
            id="feedbacktext"
            name="feedbacktext"
            rows="4"
            value={feedbacktext}
            onChange={handleFeedbacktextChange}
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
      <Nave/>
    </div>
  );
}

export default FeedbackForm;
