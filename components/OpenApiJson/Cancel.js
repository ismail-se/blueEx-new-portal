const Cancel = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Cancel Shipment API</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/live/json/cancel/serverjson.php
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
              <td className="border p-3">GET</td>
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
            {"\t"}"acno": "KHI-00000",{"\n"}
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
            {"\t"}"userid": "demo",{"\n"}
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
            {"\t"}"password": "demo123456",{"\n"}
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
            {"\t"}"consignee_number": "5007338130",{"\n"}
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
            {"\t"}"status": "0",{"\n"}
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
            {"\t"}"cn": "5007338130",{"\n"}
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
            {"\t"}"message": "This CN can't be cancel, the status has been
            changed from booked. Send email to cancel_cn@blue-ex.com with CN
            number for cancellation"{"\n"}
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
            {"\t"}"status": "1",{"\n"}
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
            {"\t"}"success": "1",{"\n"}
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
            {"\t"}"cn": "5007338130",{"\n"}
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
            {"\t"}"message": cancelled"{"\n"}
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
      <h1 className="text-[2rem] my-6">Parameters definition for Tariff API</h1>
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
              <td>y</td>
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
              <td>consignee_number</td>
              <td>10000018</td>
              <td>Add consignee number</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cancel;
