import React from "react";

const Note = ({ item }) => {
  if (item.isstaff) {
    return (
      <li className="list-group-item border-dark text-dark my-2">
        <h2>Note:- {item.note}</h2>
        <p className="text-dark">
          Date: {new Date(item.createdAt).toLocaleDateString("en-IN")} <br />
          Time: {new Date(item.createdAt).toLocaleTimeString("en-IN")}
        </p>

        {item.isstaff ? (
          <>
            <p className="text-dark">From - Staff ({item.staffid})</p>
          </>
        ) : (
          <>
            <p className="text-dark">From - Self</p>
          </>
        )}
      </li>
    );
  }
  return (
    <li className="list-group-item  bg-secondary text-light my-2">
      <h2>Note:- {item.note}</h2>
      <p className="text-light">
        Date: {new Date(item.createdAt).toLocaleDateString("en-IN")} <br />
        Time: {new Date(item.createdAt).toLocaleTimeString("en-IN")}
      </p>

      {item.isstaff ? (
        <>
          <p className="text-light">From - Staff ({item.staffid})</p>
        </>
      ) : (
        <>
          <p className="text-light">From - Self</p>
        </>
      )}
    </li>
  );
};

export default Note;
