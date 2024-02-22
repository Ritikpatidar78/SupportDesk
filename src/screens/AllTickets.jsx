import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getallticket } from "../features/tickets/TicketSlice";
import Ticket from "../components/Ticket";
import Backbutton from "../components/Backbutton";
import { toast } from "react-toastify";

const AllTickets = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { tickets, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getallticket());
  }, [user]);

  if (isLoading) {
    return (
      <div className="container-fluid p-5">
        <h1 className="display-5 text-secondary text-center">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="container-fluid p-5">
      <h1 className="text-secondary text-center">All Tickets</h1>
      <Backbutton location={"/"} />

      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Product</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, index) => (
              <Ticket ticket={item} key={item._id} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTickets;
