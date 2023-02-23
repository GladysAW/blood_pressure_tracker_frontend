import React, { useState } from "react";
import EntryForm from "./EntryForm";
import "./NewEntry.scss";

const NewEntry = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-entry">
      {!isEditing && <button onClick={startEditHandler}>Add new entry</button>}

      {isEditing && <EntryForm setIsEditing={setIsEditing} />}
    </div>
  );
};

export default NewEntry;
