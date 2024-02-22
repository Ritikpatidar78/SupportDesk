import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../features/auth/UserSlice";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const [confirmpassword, setconfirmpassword] = useState("");
  const navigate = useNavigate();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formdata;

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (password === confirmpassword) {
      dispatch(register(formdata));
    } else {
      toast.error("Enter Same Password");
    }
    setformdata({
      name: "",
      email: "",
      password: "",
    });
    setconfirmpassword("");
  };

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  // }, [isError]);

  useEffect(() => {
    if (user) {
      toast.success("Registerd");
      navigate("/");
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="container-fluid p-5">
        <h1 className="text-center text-secondary">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container-fluid p-5">
      <h1 className="text-center text-secondary">Register Here</h1>
      <div className="card p-3 my-3">
        <form className="my-3" onSubmit={handlesubmit}>
          <input
            placeholder="Enter Name"
            type="text"
            name="name"
            value={name}
            onChange={handlechange}
            className="form-control my-3"
            required
          />
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={handlechange}
            className="form-control my-3"
            required
          />
          <input
            placeholder="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={handlechange}
            className="form-control my-3"
            required
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
            className="form-control my-3"
            required
          />
          <button className="btn btn-success w-100">Register</button>
          <p className="text-secondary py-4">
            Already have an Account? <Link to="/login">Login.</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
