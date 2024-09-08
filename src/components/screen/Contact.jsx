import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container py-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message" required></textarea>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
