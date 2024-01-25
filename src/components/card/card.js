import React from "react";
import "./style.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = (props) => {
  const {
    img = "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1386",
    username = "User Name",
    email = "ramnayan699@gmail.com",
    mobile = "8978373723",
    url = "http://hildegard.org",
    like = false,
    handleLikes,
    deleteCard,
    editCard,
  } = props;

  return (
    <div className="card_container">
      <div className="image_box">
        <img src={img} alt="user" title={username} />
      </div>
      <div className="user_info_box">
        <h3 className="user_name">{username}</h3>
        <p className="email_box">
          <EmailOutlinedIcon style={styles.icon} className="email_icon" />
          <span>{email}</span>
        </p>
        <p className="mobile_box">
          <PhoneEnabledOutlinedIcon
            style={styles.icon}
            className="phone_icon"
          />
          <span>{mobile}</span>
        </p>
        <p className="websit_box">
          <LanguageOutlinedIcon style={styles.icon} className="world_icon" />
          <span>{url}</span>
        </p>
      </div>
      <div className="buttons_box">
        <span title="like" onClick={() => handleLikes(props)}>
          {!like && <FavoriteBorderOutlinedIcon className="like_icon" />}
          {like && <FavoriteOutlinedIcon className="like_icon" />}
        </span>
        <span title="edit" className="edit" onClick={() => editCard(props)}>
          <DriveFileRenameOutlineOutlinedIcon className="edit_icon" />
        </span>
        <span title="delete" onClick={() => deleteCard(props)}>
          <DeleteIcon className="delete_icon" />
        </span>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  icon: {
    width: "20px",
    height: "20px",
  },
};
