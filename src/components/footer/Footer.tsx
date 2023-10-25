import { useState } from "react";
import "./Footer.css";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

export default function Footer() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="footer">
      <div>
        <p onClick={() => setShowModal(true)} className="contact-me">
          <FaEnvelope style={{ paddingRight: "0.5rem" }} />
          Contact me
        </p>
        <Modal
          showModal={showModal}
          onRequestClose={() => setShowModal(false)}
        />
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
