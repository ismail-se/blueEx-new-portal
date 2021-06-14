import { Modal } from "react-bootstrap";

export default function Message(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-8 flex flex-col gap-4">
        <div className="">
          <div className="bg-[#007bff] text-white px-[12px] py-[5px] rounded-sm inline-block min-w-[10rem]">
            Test
          </div>
          <div className="text-sm text-[#747474]">16-03-2020 15:25:48</div>
        </div>
        <div className="self-end">
          <div className="bg-[#007bff] text-white px-[12px] py-[5px] rounded-sm inline-block min-w-[10rem]">
            Please Reattempt this pro
          </div>
          <div className="text-sm text-[#747474]">16-03-2020 15:25:48</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
