import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createticket } from "../features/tickets/TicketSlice";
import { toast } from "react-toastify";
import Backbutton from "../components/Backbutton";

const NewTicket = () => {
  const { user, isError, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [coverimg, setcoverimg] = useState("");

  const onchangefile = (e) => {
    setcoverimg(e.target.files[0]);
  };

  const [formdata, setformdata] = useState({
    product: "Laptop",
    description: "",
    status: "",
  });

  const { product, description } = formdata;

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const data = {
      product: product,
      description: description,
      status: "New",
      coverimg: coverimg,
    };
    dispatch(createticket(data));
    navigate("/all-ticket");

    setformdata({
      product: "Laptop",
      description: "",
    });
    setcoverimg("");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  if (!user) {
    return (
      <div className="container-fluid p-5">
        <h1 className="display-5 text-secondary text-center">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container-fluid p-5">
      <h1 className="text-center text-secondary">Create New Ticket</h1>
      <Backbutton location={"/"} />
      <div className="card p-3">
        <h3 className="text-center">Please Fill All Details</h3>
        <form onSubmit={handlesubmit} className="my-3">
          <input
            type="text"
            className="form-control my-3"
            value={user.name}
            disabled
          />
          <input
            type="email"
            className="form-control my-3"
            value={user.email}
            disabled
          />
          <select
            name="product"
            value={product}
            onChange={handlechange}
            className="form-select my-3"
            required
          >
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
          </select>
          <textarea
            name="description"
            value={description}
            onChange={handlechange}
            placeholder="Please Describe Your Issue"
            className="form-control my-3"
            required
          ></textarea>
          <div className="input-group mb-3">
            <input
              onChange={onchangefile}
              type="file"
              className="form-control"
              id="inputGroupFile02"
            />
            <label className="input-group-text">Upload a Image</label>
          </div>
          <button className="btn btn-success w-100">Raise Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
