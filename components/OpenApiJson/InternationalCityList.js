const InternationalCityList = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">International City List API</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/demo/json/international_cities/serverjson.php
              </td>
            </tr>
            <tr>
              <td className="border p-3">acno</td>
              <td className="border p-3">KHI-00000</td>
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
            {"\t"}
            {"  "}"country_code"=&gt; "US"{"\n"}
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
            {"                                        "}
            {"\t"}
            {"\t"}
            {"\t"}
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
            {"  "}"Error_message": "Account Code is invalid"{"\n"}
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
            {"\t"}Or {"\n"}
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
            {"  "}"Error_message": "Country Code is invalid"{"\n"}
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
            {"\t"}"status":"1",{"\n"}
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
            {"\t"}"success":"1",{"\n"}
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
            {"\t"}"0":[{"\n"}
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
            {"\t"}
            {"\t"}
            {"{"}"city_name":{"{"}"0":"NEW YORK"{"}"},"city_code":{"{"}"0":"NYC"
            {"}"},"country_code":{"{"}"0":"US"{"}"}
            {"}"},{"\n"}
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
            {"\t"}
            {"\t"}
            {"{"}"city_name":{"{"}"0":"KNOXVILLE"{"}"},"city_code":{"{"}
            "0":"XVL"{"}"},"country_code":{"{"}"0":"US"{"}"}
            {"}"},{"\n"}
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
            {"\t"}
            {"\t"}
            {"{"}"city_name":{"{"}"0":"LOS ANGELES"{"}"},"city_code":{"{"}
            "0":"LOS"{"}"},"country_code":{"{"}"0":"US"{"}"}
            {"}"},{"\n"}
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
            {"\t"}
            {"\t"}
            {"{"}"city_name":{"{"}"0":"ALABAMA"{"}"},"city_code":{"{"}"0":"ALB"
            {"}"},"country_code":{"{"}"0":"US"{"}"}
            {"}"},{"\n"}
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
            {"\t"}
            {"\t"}
            {"{"}"city_name":{"{"}"0":"BAUXITE"{"}"},"city_code":{"{"}"0":"BXT"
            {"}"},"country_code":{"{"}"0":"US"{"}"}
            {"}"},{"\n"}
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
            {"\t"}
            {"\t"}
            {"{"}"city_name":{"{"}"0":"BOULDER"{"}"},"city_code":{"{"}"0":"BLD"
            {"}"},"country_code":{"{"}"0":"US"{"}"}
            {"}"},{"\n"}
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
            {"\t"}
            {"\t"}
            {"{"}"city_name":{"{"}"0":"CHICAGO"{"}"},"city_code":{"{"}"0":"CGO"
            {"}"},"country_code":{"{"}"0":"US"{"}"}
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
            {"\t"}]{"\n"}
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
              <td>country_code</td>
              <td>US</td>
              <td>Use only code of country</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternationalCityList;
