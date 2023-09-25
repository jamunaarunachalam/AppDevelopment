import React, { useState } from 'react';
import './FeedbackForm.css'
function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic here to submit the feedback to your server/database.
    // For this example, we'll just set the "submitted" state to true.
    setSubmitted(true);
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback">Please share your feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
