import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginUser() {
  let navigate = useNavigate();
  const Useremail = useRef();
  const Userpassword = useRef();
  const handleonsubmit = async (e) => {
    e.preventDefault();
    const email = Useremail.current.value;
    const password = Userpassword.current.value;

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid value");
    }
    if (json.success) {
      localStorage.setItem("userEmail", email);

      localStorage.setItem("authtoken", json.authtoken);
      navigate("/");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleonsubmit}>
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
          <Link to={"/signup"} className="m-3 btn btn-danger">
            Not A User?
          </Link>
        </form>
      </div>
    </>
  );
}

export default LoginUser;
