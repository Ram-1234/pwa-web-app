import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";

const Modal = ({ children, closeHandle }) => {
  return (
    <React.Fragment>
      <div className="backgroundcss"></div>
      <div className="container_box">
        <div className="title">{"Modal"}</div>
        <CloseIcon onClick={() => closeHandle(false)} style={styles.icon} />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;

const styles = {
  icon: {
    position: "absolute",
    top: "8px",
    right: "10px",
    cursor: "pointer",
    fontSize: "25px",
  },
};
