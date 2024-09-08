import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="container py-5">
        <h2 className="text-center mb-4">About Freakers</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <p className="lead">
              Welcome to <span className="fw-bold">Freakers</span>, the ultimate
              platform where you complete tasks and earn money! At Freakers, we
              believe that everyone should have the opportunity to make a
              difference and get rewarded for their efforts. Whether you're a
              student, a professional, or just looking to make some extra
              income, Freakers offers an easy way to do so.
            </p>
            <p className="lead">
              Our mission is to connect people with tasks that help them earn
              money while contributing to projects or businesses. From simple
              online tasks to creative jobs, Freakers has something for
              everyone!
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-5 text-center">
            <h4>Why Choose Freakers?</h4>
            <ul className="list-unstyled">
              <li>✔ Complete tasks and get paid instantly</li>
              <li>✔ Easy-to-use platform</li>
              <li>✔ Secure payments</li>
              <li>✔ Wide range of tasks to choose from</li>
              <li>✔ Join a community of dedicated task earners</li>
            </ul>
          </div>
          <div className="col-md-5 text-center">
            <h4>How It Works</h4>
            <ul className="list-unstyled">
              <li>1. Sign up for free</li>
              <li>2. Browse available tasks</li>
              <li>3. Complete tasks and submit for review</li>
              <li>4. Get paid upon task approval</li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-10 text-center">
            <h4>Join Freakers Today!</h4>
            <p>
              Start earning money by completing tasks on our platform. It's
              quick, easy, and rewarding! Sign up today and become part of the
              Freakers community.
            </p>
            <Link to="/signup" className="btn btn-success btn-lg">
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
