import { useState } from "react";
import ReactModal from "react-modal";
import FormRow from "./FormRow";
import "./Footer.css";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="footer">
      <div>
        <p onClick={() => setShowModal(true)} className="contact-me">
          <FaEnvelope style={{ paddingRight: "0.5rem" }} />
          Contact me
        </p>
        <ReactModal
          isOpen={showModal}
          contentLabel="example modal"
          onRequestClose={() => setShowModal(false)}
          className="Modal"
        >
          <form className="container">
            <h3>Contact Me</h3>
            <div>
              <FormRow name="First name" />
              <FormRow name="Last name" />
              <FormRow name="Email" />
              <FormRow name="Message" />
              <input type="submit" value="send" className="form-button" />
            </div>
          </form>
        </ReactModal>
      </div>
      <div>
        <p>
          <NavLink to={"/github-carbon"}>
            <FaGithub style={{ paddingRight: "0.5rem" }} />
            Visit my Github
          </NavLink>
        </p>
      </div>
      <div>
        <p>© Copyright 2023 Carbon It</p>
      </div>
    </div>
  );
}
