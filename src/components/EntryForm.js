import axios from "axios";
import React, { useState, useContext } from "react";
import { DataContext } from "../context";
import "./EntryForm.scss";
import { formFields } from "./formFields/formFields";

const EntryForm = ({ setIsEditing }) => {
  const { fetchData } = useContext(DataContext);

  const initialState = {
    date: "",
    time: "",
    systolic: "",
    diastolic: "",
    pulse: "",
  };

  const [entry, setEntry] = useState(initialState);

  const changeHandler = (event) => {
    setEntry({ ...entry, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/entries", entry);
    } catch (error) {
      console.log(error);
    } finally {
      fetchData();
      setEntry(initialState);
      setIsEditing(false);
    }
  };

  const onCancel = () => {
    setIsEditing(false);
  };

  return (
    <form onSubmit={submitHandler} className="entry-form">
      {formFields.map((obj) => (
        <div key={obj.name} className="input-field">
          <label htmlFor={obj.name}>{obj.label}</label>
          <input
            required
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
      <div className="buttons">
        <button type="submit">Add entry</button>
        <button type="button" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default EntryForm;
