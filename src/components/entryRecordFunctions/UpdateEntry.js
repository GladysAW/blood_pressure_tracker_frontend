import axios from "axios";
import React, { useState, useContext } from "react";
import { DataContext } from "../../context";
import "./UpdateEntry.scss";
import { formFields } from "../formFields/formFields";

const UpdateEntry = ({ selectedEntry, setShowForm }) => {
  const { fetchData } = useContext(DataContext);

  const [entry, setEntry] = useState(selectedEntry);

  const changeHandler = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  const sumbitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `https://blood-pressure-tracker-api-mern.onrender.com/entries/${entry._id}`,
        entry
      );
    } catch (error) {
      console.log(error);
    } finally {
      setShowForm(false);
      fetchData();
    }
  };

  const onCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="modal-update">
      <div className="modal-overlay" onClick={onCancel}></div>
      <form className="update-form" onSubmit={sumbitHandler}>
        {formFields.map((obj) => (
          <div key={obj.name} className="input-field">
            <label htmlFor={obj.name}>{obj.label}</label>
            <input
              type={obj.type}
              id={obj.name}
              name={obj.name}
              value={obj.value}
              min={obj.min}
              max={obj.max}
              onChange={changeHandler}
            />
          </div>
        ))}
        <div className="action-buttons">
          <button type="submit">Submit Changes</button>
          <button type="button" onClick={onCancel}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEntry;
