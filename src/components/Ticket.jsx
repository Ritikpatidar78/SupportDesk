import React from "react";
import { Link } from "react-router-dom";

const Ticket = ({ ticket, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{ticket.product}</td>
      <td>{new Date(ticket.createdAt).toLocaleDateString("en-IN")}</td>
      <td>
        {ticket.status === "New" ? (
          <>
            <span className="badge text-bg-success">{ticket.status}</span>
          </>
        ) : ticket.status === "Solved" ? (
          <>
            <span className="badge text-bg-primary">{ticket.status}</span>
          </>
        ) : (
          <>
            <span className="badge text-bg-danger">{ticket.status}</span>
          </>
        )}
      </td>
      <td>
        <Link to={`/ticket/${ticket._id}`} className="btn btn-sm btn-dark">
          View
        </Link>
      </td>
    </tr>
  );
};

export default Ticket;
