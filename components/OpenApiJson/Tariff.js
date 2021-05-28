const Tariff = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Tariff API</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://113.203.238.11/customerportal/calculatetarrif.py
              </td>
            </tr>
            <tr>
              <td className="border p-3">acno</td>
              <td className="border p-3">KHI-00000</td>
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
            {"\t"}
            {"\t"}"origin": "KHI",{"\n"}
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
            {"\t"}"destination": "ISB",{"\n"}
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
            {"\t"}"service": "BE",{"\n"}
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
            {"\t"}"wgt": "1"{"\n"}
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
            {"  "}
            {"\t"}"status": "0",{"\n"}
            {"  "}
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
            {"\t"}"Error_message": "Account code is missing"{"\n"}
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
            {" "}
            {"{"} "result": "400" {"}"}{" "}
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
              <td>origin</td>
              <td>KHI</td>
              <td>
                Use City code of Origion from the city list provided KHI for
                Karachi ISB for Islamabad
              </td>
            </tr>
            <tr>
              <td>destination</td>
              <td>ISB</td>
              <td>
                Use City code of Destination from the city list provided KHI for
                Karachi ISB for Islamabad
              </td>
            </tr>
            <tr>
              <td>service</td>
              <td>BE</td>
              <td>BlueeX Service Code BE,BG,BT For demo use BE</td>
            </tr>
            <tr>
              <td>wgt</td>
              <td>1</td>
              <td>Weight should be in KG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tariff;
