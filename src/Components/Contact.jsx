import React from 'react';

const Contact = () => (
  <div id="contact" className="container mt-5">
    <h2>Contact Me</h2>
    <form>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <textarea className="form-control" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </div>
);

export default Contact;
