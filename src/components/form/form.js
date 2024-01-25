import React, { useState } from "react";
import "./style.css";

const Form = ({
  first,
  mobile,
  email,
  country,
  closeHandle,
  updateList,
  id,
}) => {
  const [eml, setEmail] = useState(email);
  const [mob, setMobile] = useState(mobile);
  const [cty, setCountry] = useState(country);
  const [name, setName] = useState(first);

  function submit(e) {
    e.preventDefault();
    updateList({ first: name, email: eml, mobile: mob, country: cty, id: id });
  }

  return (
    <form className="user_info_form" onSubmit={submit}>
      <hr />
      <div className="input_box">
        <label>
          <span className="required">*</span>Name:
        </label>{" "}
        <input
          type="text"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input_box">
        <label>
          <span className="required">*</span>Email:
        </label>{" "}
        <input
          type="email"
          required={true}
          value={eml}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input_box">
        <label>
          <span className="required">*</span>Phone:
        </label>{" "}
        <input
          type="tel"
          required={true}
          value={mob}
          max={10}
          min={10}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="input_box">
        <label>
          <span className="required">*</span>Country:
        </label>{" "}
        <input
          type="text"
          required={true}
          value={cty}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <hr />
      <div className="form_button">
        <button onClick={() => closeHandle(false)}>Cancel</button>
        <button type="submit" style={{ background: "dodgerblue" }}>
          Ok
        </button>
      </div>
    </form>
  );
};

export default Form;
