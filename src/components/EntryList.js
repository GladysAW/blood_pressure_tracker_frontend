import React, { useContext } from "react";
import { DataContext } from "../context";
import EntryRecord from "./EntryRecord";
import "./EntryList.scss";

const EntryList = () => {
  const { data, error, loading } = useContext(DataContext);
  return (
    <>
      {loading && <div className="loader"></div>}

      {error && (
        <div className="error">
          <p>An error occurred while fetching your data:</p>
          <p>{error.message}</p>
          <p>please refresh the page</p>
        </div>
      )}

      {data && (
        <div className="list-wrapper">
          {data.map((entry) => (
            <EntryRecord key={entry._id} entry={entry} />
          ))}
        </div>
      )}
    </>
  );
};

export default EntryList;
