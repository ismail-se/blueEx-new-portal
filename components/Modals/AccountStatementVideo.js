import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function AccountStatementVideo(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="flex justify-center items-center">
        <ReactPlayer
          className="react-player"
          url="/videos/accountStatement.mp4"
          width="100%"
          controls={true}
        />
      </Modal.Body>
    </Modal>
  );
}
