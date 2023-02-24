import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { RiFileEditFill, RiTimeFill } from "react-icons/ri";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import axios from "axios";
import { DataContext } from "../context";
import UpdateEntry from "./entryRecordFunctions/UpdateEntry";
import "./EntryRecord.scss";
import DeleteConfirmation from "./entryRecordFunctions/DeleteConfirmation";

const EntryRecord = ({ entry }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState({});
  const [confirmation, setConfirmation] = useState(false);
  const { date, time, systolic, diastolic, pulse } = entry;

  const { fetchData } = useContext(DataContext);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`https://blood-pressure-tracker-api-mern.onrender.com/entries/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      fetchData();
    }
  };

  const editHandler = (entry) => {
    setShowForm(true);
    setSelectedEntry(entry);
  };

  const confirmHandler = () => {
    setConfirmation(true);
  };

  const deleteFuncCall = () => {
    deleteHandler(entry._id);
  };
  return (
    <div className="record">
      <div>
        <BsCalendar2CheckFill className="icon date" />
        <p className="output">{date}</p>
      </div>
      <div>
        <RiTimeFill className="icon time" />
        <p className="output">{time}</p>
      </div>
      <div>
        <p className="icon sys">SYS</p>
        <p className="output">
          {systolic >= 160
            ? `${systolic}❗️`
            : systolic >= 140
            ? `${systolic}❕`
            : `${systolic}`}
        </p>
      </div>
      <div>
        <p className="icon dia">DIA</p>
        <p className="output">
          {diastolic >= 100
            ? `${diastolic}❗️`
            : diastolic >= 90
            ? `${diastolic}❕`
            : `${diastolic}`}
        </p>
      </div>
      <div>
        <FaHeartbeat className="icon heart" />
        <p className="output">{pulse}</p>
      </div>
      <div className="action-icons">
        <RiFileEditFill className="icon" onClick={() => editHandler(entry)} />
        <MdDelete
          className="icon"
          onClick={() => {
            confirmHandler();
          }}
        />
      </div>
      {showForm && (
        <UpdateEntry selectedEntry={selectedEntry} setShowForm={setShowForm} />
      )}
      {confirmation && (
        <DeleteConfirmation
          deleteFuncCall={deleteFuncCall}
          setConfirmation={setConfirmation}
        />
      )}
    </div>
  );
};

export default EntryRecord;
