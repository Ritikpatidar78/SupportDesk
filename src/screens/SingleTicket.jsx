import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createnote,
  getnote,
  getsingleticket,
  updateticket,
} from "../features/tickets/TicketSlice";
import Backbutton from "../components/Backbutton";
import Note from "../components/Note";
import { toast } from "react-toastify";

const SingleTicket = () => {
  const { id } = useParams();
  const { sticket, isLoading, note, isError, message } = useSelector(
    (state) => state.ticket
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formnote, setformnote] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      ticketid: sticket._id,
      note: formnote,
    };
    dispatch(createnote(data));
    setformnote("");
  };

  const closedticket = () => {
    const data = {
      _id: sticket._id,
      status: "Closed",
    };
    dispatch(updateticket(data));
    navigate("/all-ticket");
  };

  useEffect(() => {
    dispatch(getsingleticket(id));
    dispatch(getnote(id));
    if (!user) {
      navigate("/login");
    }
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
      <h1 className="text-secondary text-center">Your Ticket</h1>
      <Backbutton location={"/all-ticket"} />
      <div className="card p-3 my-3">
        <h1 className="card-title">Product : {sticket.product}</h1>
        <h3>Description : {sticket.description}</h3>
        <p className="text-secondary border-top pt-2">
          Ticket ID :{sticket._id}
        </p>
        <p className="text-secondary">
          Date: {new Date(sticket.createdAt).toLocaleDateString("en-IN")}
        </p>

        <p>
          Status :{" "}
          {sticket.status === "New" ? (
            <>
              <span className="badge text-bg-success">{sticket.status}</span>
            </>
          ) : sticket.status === "Solved" ? (
            <>
              <span className="badge text-bg-primary">{sticket.status}</span>
            </>
          ) : (
            <>
              <span className="badge text-bg-danger">{sticket.status}</span>
            </>
          )}
        </p>
        <div>
          <img
            className="rounded-t-lg p-3 border border-black w-100 image px-6"
            src={`https://supportdeskbackend-o50j.onrender.com/${sticket.coverimg}`}
            alt="img"
          />
        </div>
      </div>
      {sticket.status === "Closed" ? (
        <></>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-dark btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Note +
          </button>
        </>
      )}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                name="formnote"
                value={formnote}
                onChange={(e) => setformnote(e.target.value)}
                placeholder="Give Your Note Here"
                className="form-control my-3"
                required
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                onClick={handlesubmit}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {note.length === 0 || !note ? (
        <>
          <div className="card p-3 my-3">
            <h3>No Notes Here </h3>
          </div>
        </>
      ) : (
        <>
          <div className="card p-3 my-3">
            <h3>Notes : </h3>
            <ul className="my-3 list-group">
              {note.map((item) => (
                <Note item={item} key={item._id} />
              ))}
            </ul>
          </div>
        </>
      )}

      {sticket.status === "Closed" ? (
        <>
          {" "}
          <button disabled className="btn btn-danger w-100">
            Close Ticket
          </button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={closedticket} className="btn btn-danger w-100">
            Close Ticket
          </button>
        </>
      )}
    </div>
  );
};

export default SingleTicket;
