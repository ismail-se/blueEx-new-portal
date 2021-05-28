const Status = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Status API</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/demo/json/status/serverjson.php
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
      <h4 className="text-xl mb-2 mt-2">Data Passing JSON</h4>
      <div className="overflow-x-auto">
        <pre className="language-markup">
          <code className="language-markup">
            request={"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"acno": "KHI-00000",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"userid": "demo",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"password": "demo123456",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"order_refernce_code": "10005647"{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"}"}
          </code>
        </pre>
      </div>
      <h1 className="text-[2rem] my-6">API Call Result</h1>
      <h4 className="text-xl mb-2">Error In Detail</h4>
      <div className="overflow-x-auto">
        <pre className="language-markup">
          <code className="language-markup">
            {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"status": "0",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"Error_message": "Order Reference Code is invalid"{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"}"}
          </code>
        </pre>
      </div>
      <h4 className="text-xl mb-2">Success Result</h4>
      <div className="overflow-x-auto">
        <pre className="language-markup">
          <code className="language-markup">
            <p>If Order is pending</p>
            {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"status": "1",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"success": "1",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}" order_refernce_code": "10005647",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"     "}"message": "Pending"{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"}"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            <p>If order is in Booked, Received, out of delivery Etc</p>
            {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"status": "1",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"success": "1",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}" order_refernce_code": "10005647",{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"message": "Booked/Out of Devlivery/Recieved"{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}"cn": "5006635355"{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"}"}
          </code>
        </pre>
      </div>
      <h1 className="text-[2rem] my-6">
        Parameters definition for Request Status API
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row" width="30%">
                Parameters
              </th>
              <th scope="row" width="30%">
                Sample data
              </th>
              <th scope="row" width="40%">
                Descriptions
              </th>
            </tr>
            <tr>
              <td>acno</td>
              <td>KHI-00000</td>
              <td>
                Account code which BlueEX will provide you after demo testing
              </td>
            </tr>
            <tr>
              <td>testbit</td>
              <td>Y</td>
              <td>
                If you are testing use ‘y’ when you use your actual account code
                and password use ‘n’
              </td>
            </tr>
            <tr>
              <td>userid</td>
              <td>demo</td>
              <td>Userid which BlueEX will provide you after demo</td>
            </tr>
            <tr>
              <td>password</td>
              <td>demo123456</td>
              <td>Userid which BlueEX will provide you after demo</td>
            </tr>
            <tr>
              <td>order_refernce_code</td>
              <td>10000018</td>
              <td>Your order code should be here</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-[2rem] my-6">
        Parameters definition for Response Status API
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row" width="30%">
                Parameters
              </th>
              <th scope="row" width="30%">
                Sample data
              </th>
              <th scope="row" width="40%">
                Descriptions
              </th>
            </tr>
            <tr>
              <td>status</td>
              <td>0 or 1</td>
              <td>
                If there is any error the Status will return 0 if There is not
                any error then status will return 1
              </td>
            </tr>
            <tr>
              <td>success</td>
              <td>1</td>
              <td>
                This will be only return if the CN has been generated of your
                order
              </td>
            </tr>
            <tr>
              <td>order_refernce_code</td>
              <td>100000176</td>
              <td>Same order code which you sent in request</td>
            </tr>
            <tr>
              <td>message </td>
              <td>Pending,Delivered etc</td>
              <td>Status message of your shipment</td>
            </tr>
            <tr>
              <td>cn</td>
              <td>5006635355</td>
              <td>Consignee number of blueex if shipment is booked </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;
