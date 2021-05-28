const CancelOrder = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Cancel Order Api</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/demo/xml/cancel/serverxml.php
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
            20
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
                <span className="token punctuation">&lt;</span>voidStatus
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>voidStatus
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
    </div>
  );
};

export default CancelOrder;
