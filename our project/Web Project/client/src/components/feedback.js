import React from 'react';

const FeedbackForm = () => {
  return (
    <form action="https://formspree.io/YOUR_EMAIL_HERE" method="POST">
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Feedback:
        <textarea name="feedback" required />
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;

