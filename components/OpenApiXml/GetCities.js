const GetCities = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Get Cities API</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/extensions/cities/citylist.php
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
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>BenefitDocument
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>AccessRequest
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>DocumentType
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>DocumentType
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Customerinfo
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>account_number
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            KHI-00000
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>account_number
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>country_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            US
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>country_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>Customerinfo
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>AccessRequest
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
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
            {"\n"}
            {"\n"}
            <span className="token prolog">
              &lt;?xml version="1.0" encoding="utf-8"?&gt;
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>result
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
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
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>message
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            You must enter Account Number
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>message
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>result
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
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
                <span className="token punctuation">&lt;</span>result
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>response
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Cities
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>citiesinfo
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"        "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>country_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            US
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>country_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"        "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>city_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            NYC
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>city_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"        "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>city_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            NEW YORK
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>city_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>citiesinfo
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>citiesinfo
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"        "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>country_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            US
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>country_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"        "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>city_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            XVL
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>city_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"        "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>city_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            KNOXVILLE
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>city_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>citiesinfo
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>Cities
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>response
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
            {"\n"}
            {"\n"}
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
              <td className="border p-3">{"<acno></acno>"}</td>
              <td className="border p-3">{"<acno>KHI-00000</acno>"}</td>
              <td className="border p-3">
              Account number will be provide by blueEx after completing the testing process.
              </td>
            </tr>
            <tr>
              <td className="border p-3">{"<country_code> </ country_code>"}</td>
              <td className="border p-3">{"<country_code>US</ country_code>"}</td>
              <td className="border p-3">
              Send Value in Code United State : US Pakistan :PK
              </td>
            </tr>
            <tr>
              <td className="border p-3">
                {"<country_code>US</country_code>"}
              </td>
              <td className="border p-3">
                {"<country_code>US</country_code>"}
              </td>
              <td className="border p-3">
              Response Data Country Code
              </td>
            </tr>
            <tr>
              <td className="border p-3">
                {"<city_code>XVL</city_code>"}
              </td>
              <td className="border p-3">
                {"<city_code>XVL</city_code>"}
              </td>
              <td className="border p-3">
              Response Data Country Code
              </td>
            </tr>
            <tr>
              <td className="border p-3">{"<city_name>KNOXVILLE</city_name>"}</td>
              <td className="border p-3">{"<city_name>KNOXVILLE</city_name>"}</td>
              <td className="border p-3">
              Response Data City Name
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetCities;
