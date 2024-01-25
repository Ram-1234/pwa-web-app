import React from "react";
import "./style.css";

function Dialog(props) {
  const { cancelDelet, confirmDelete } = props;

  return (
    <div className="dialog_container">
      <div className="dialog_title">Are you sure want to delete?</div>
      <div className="dialog_buttons">
        <button type="button" className="cancle_button" onClick={cancelDelet}>
          cancel
        </button>
        <button type="button" className="delete_button" onClick={confirmDelete}>
          delete
        </button>
      </div>
    </div>
  );
}

export default Dialog;
