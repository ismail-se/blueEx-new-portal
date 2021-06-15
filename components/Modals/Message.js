import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useStateValue } from "../../context/StateProvider";

export default function Message(props) {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [{ acno }, dispatch] = useStateValue();

  const fetchMessages = async () => {
    var formdata = new FormData();
    formdata.append("request", `{"cnno":"${props.cn}"}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    setData(
      await fetch(
        "http://portal.blue-ex.com/api1/customerportal/returnrequestmessage.py",
        requestOptions
      ).then((response) => response.json())
    );
  };

  const sendMessage = async () => {
    var formdata = new FormData();
    formdata.append(
      "request",
      `{"cnno":"${props.cn}","acno":"${acno}","message":"${message}"}`
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(
      "http://portal.blue-ex.com/api1/customerportal/returnmessage.py",
      requestOptions
    ).then((response) => response.json());
    if (response.status === "1") {
      await fetchMessages();
    }

    setMessage("");
  };

  useEffect(async () => {
    setData(null);
    await fetchMessages();
  }, [props.cn]);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-8 flex flex-col gap-4">
        {data && data.status === "1" && (
          <>
            {data.detail.map((d) => (
              <div
                key={d.TIME}
                className={`${d.USRID === "None" && "self-end"}`}
              >
                <div className="bg-[#007bff] text-white px-[12px] py-[5px] rounded-sm inline-block min-w-[10rem]">
                  {d.MESSAGE}
                </div>
                <div className="text-sm text-[#747474]">{d.TIME}</div>
              </div>
            ))}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="relative">
          <textarea
            cols={90}
            input="type a message"
            placeholder="Type a message"
            className="resize-none focus:outline-none "
            spellCheck="false"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="absolute top-2 right-2 border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-sm bg-white"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
