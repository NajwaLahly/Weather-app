import { useState } from "react";
import ReactModal from "react-modal";
import FormRow from "./FormRow";
import "./Footer.css";
import { FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <p onClick={() => setShowModal(true)} className="contact-me">
        Contact me
        <FaPaperPlane style={{ paddingLeft: "0.5rem" }} />
      </p>
      <ReactModal
        isOpen={showModal}
        contentLabel="example modal"
        onRequestClose={() => setShowModal(false)}
        className="Modal"
        // overlayClassName="Overlay"
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
  );
}
