const Tracking = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Tracking API</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/demo/xml/tracking/serverxml.php
              </td>
            </tr>
            <tr>
              <td className="border p-3">User ID</td>
              <td className="border p-3">demo</td>
            </tr>
            <tr>
              <td className="border p-3">Password</td>
              <td className="border p-3">demo123456</td>
            </tr>
            <tr>
              <td className="border p-3">Type</td>
              <td className="border p-3">Post/Get</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 className="text-xl mb-2 mt-2">Data Passing XML</h4>
      <div className="overflow-x-auto">
        <pre className=" language-markup">
          <code className=" language-markup">
            <span className="token prolog">
              &lt;?xml version="1.0" encoding="utf-8"?&gt;
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>BenefitDocument
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>AccessRequest
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>DocumentType
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            6
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>DocumentType
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>ShipmentDetail
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>cnNumber
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            5005840372
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>cnNumber
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>ShipmentDetail
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>AccessRequest
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>BenefitDocument
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </code>
        </pre>
      </div>
      <h1 className="text-[2rem] my-6">API Call Result</h1>
      <h4 className="text-xl mb-2">Error In Detail</h4>
      <div className="overflow-x-auto">
        <pre className=" language-markup">
          <code className=" language-markup">
            <span className="token prolog">
              &lt;?xml version="1.0" encoding="utf-8"?&gt;
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>result
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>status
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            0
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>status
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>message
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            You must enter CN number
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>message
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>result
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"  "}
            {"\n"}
            {"\n"}
          </code>
        </pre>
      </div>
      <h4 className="text-xl mb-2">Success Result</h4>
      <div className="overflow-x-auto">
        <pre className=" language-markup">
          <code className=" language-markup">
            <span className="token prolog">
              &lt;?xml version="1.0" encoding="utf-8"?&gt;
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>record
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>status
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>shipmentnumber
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            5005889634
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>shipmentnumber
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            May 10th, 2018
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            04:12 PM
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Shipment has reached blueEX Islamabad - Islamabad
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            May 09th, 2018
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            10:40 PM
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Shipment is on route to Islamabad
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            May 09th, 2018
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            09:28 PM
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Shipment reached blueEX Head Office, Karachi
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            May 08th, 2018
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusdate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            05:05 PM
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statustime
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Order information received, pending at Shipper's end.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusmessage
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>statusrow
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>status
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>record
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
          </code>
        </pre>
      </div>
      <h1 className="text-[2rem] my-6">Parameters definition for Order API</h1>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <thead>
            <tr>
              <td className="border p-3 font-semibold">Parameters</td>
              <td className="border p-3 font-semibold">Sample data</td>
              <td className="border p-3 font-semibold">Descriptions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">{"<cnNumber> </cnNumber>"}</td>
              <td className="border p-3">
                {"<cnNumber>5005840372</cnNumber>"}
              </td>
              <td className="border p-3">
                Consignee Number which you will get at the time of placing order
              </td>
            </tr>
            <tr>
              <td className="border p-3">{"<userid> </userid>"}</td>
              <td className="border p-3">{"<userid>demo</userid>"}</td>
              <td className="border p-3">Provided from BlueEX</td>
            </tr>
            <tr>
              <td className="border p-3">{"<password> </password>"}</td>
              <td className="border p-3">{"<password>demo</password>"}</td>
              <td className="border p-3">Provided from BlueEX</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tracking;
