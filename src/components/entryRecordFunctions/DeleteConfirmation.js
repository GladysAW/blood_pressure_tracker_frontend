import React from "react";
import "./DeleteConfirmation.scss";

const DeleteConfirmation = ({ setConfirmation, deleteFuncCall }) => {
  const btnHandler = () => {
    deleteFuncCall();
  };

  const onCancel = () => {
    setConfirmation(false);
  };

  return (
    <div className="modal-delete">
      <div className="modal-overlay" onClick={onCancel}></div>
      <div className="confirmation-request">
        <p>Are you sure?</p>
        <div className="buttons">
          <button type="button" onClick={btnHandler}>
            Delete
          </button>
          <button type="button" onClick={onCancel}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
