import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const Username = useRef();
  const Useremail = useRef();
  const Userpassword = useRef();
  const handleonsubmit = async (e) => {
    e.preventDefault();
    const username = Username.current.value;
    const email = Useremail.current.value;
    const password = Userpassword.current.value;

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    });

    const json = await response.json();
    if (response.status === 400) {
      return alert("Email id already exist");
    }
    if (json.success) {
      navigate("/login");
    } else {
      alert("Please enter valid values");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleonsubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              ref={Username}
              //onChange={handleonchange}
              className="form-control"
              id="exampleInputName1"
              placeholder="Enter your name.."
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              ref={Useremail}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              ref={Userpassword}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to={"/login"} className="m-3 btn btn-danger">
            Already a user?
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
