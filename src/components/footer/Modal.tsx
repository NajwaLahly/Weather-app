import ReactModal from "react-modal";
import FormRow from "./FormRow";

type ModalProps = {
  showModal: boolean;
  onRequestClose: () => void
};

export default function Modal({ showModal, onRequestClose }: ModalProps) {
  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="example modal"
      onRequestClose={onRequestClose}
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
  );
}
