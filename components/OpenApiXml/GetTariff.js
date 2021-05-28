const GetTariff = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Get Tariff</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/demo/xml/tariff/serverxml.php
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
            5
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
                <span className="token punctuation">&lt;</span>ServiceCode
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            BG
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>ServiceCode
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>OriginCity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            KHI
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>OriginCity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>
                DestinationCountry
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            PK
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>
                DestinationCountry
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>DestinationCity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            LHE
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>DestinationCity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>Weight
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1.5
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>Weight
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>CBCAmount
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            5000
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>CBCAmount
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>ParcelType
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            P
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>ParcelType
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
            </span>{" "}
            {"\n"}
            {"\n"}
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
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>message
              </span>
              <span className="token punctuation">&gt;</span>
            </span>{" "}
            You must enter Weight
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
            </span>{" "}
            {"\n"}
            {"\n"}
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
            1
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
                <span className="token punctuation">&lt;</span>weightcharges
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            280
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>weightcharges
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>gstcharges
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            0
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>gstcharges
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>othercharges
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            0
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>othercharges
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
              <td className="border p-3">{"<ServiceCode>BG</ServiceCode>"}</td>
              <td className="border p-3">{"<ServiceCode>BG</ServiceCode>"}</td>
              <td className="border p-3">
                Service Code provided by blueEx BG, BE
              </td>
            </tr>
            <tr>
              <td className="border p-3">{"<OriginCity>KHI</OriginCity>"}</td>
              <td className="border p-3">{"<OriginCity>KHI</OriginCity>"}</td>
              <td className="border p-3">
                Shipper City : Only Code For example : KHI
              </td>
            </tr>
            <tr>
              <td className="border p-3">
                {"<DestinationCountry>PK</DestinationCountry>"}
              </td>
              <td className="border p-3">
                {"<DestinationCountry>PK</DestinationCountry>"}
              </td>
              <td className="border p-3">
                Destination Country : Only Code For example : PK
              </td>
            </tr>
            <tr>
              <td className="border p-3">
                {"<DestinationCity> </DestinationCity>"}
              </td>
              <td className="border p-3">
                {"<DestinationCity>LHE</DestinationCity>"}
              </td>
              <td className="border p-3">
                Destination City where you want to Send
              </td>
            </tr>
            <tr>
              <td className="border p-3">{"<Weight></Weight>"}</td>
              <td className="border p-3">{"<Weight>1.5</Weight>"}</td>
              <td className="border p-3">
                Weight in Kgs.Only Enter Number 1 (1.5)
              </td>
            </tr>
            <tr>
              <td className="border p-3">{"<CBCAmount>5000</CBCAmount>"}</td>
              <td className="border p-3">{"<CBCAmount>5000</CBCAmount>"}</td>
              <td className="border p-3">Total amount of order</td>
            </tr>
            <tr>
              <td className="border p-3">{"<ParcelType>P</ParcelType>"}</td>
              <td className="border p-3">{"<ParcelType>P</ParcelType>"}</td>
              <td className="border p-3">Parcel Type</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetTariff;
