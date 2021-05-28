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
              http://bigazure.com/api/demo/xml/status/serverxml.php
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
<pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>BenefitDocument</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>AccessRequest</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>DocumentType</span><span className="token punctuation">&gt;</span></span>1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>DocumentType</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>Orderdetail</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>acno</span><span className="token punctuation">&gt;</span></span>KHI-00000<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>acno</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>userid</span><span className="token punctuation">&gt;</span></span>demo<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>userid</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>password</span><span className="token punctuation">&gt;</span></span>demo123456<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>password</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>Orders</span><span className="token punctuation">&gt;</span></span>{"\n"}{"        "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>codes</span><span className="token punctuation">&gt;</span></span>{"\n"}{"            "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>OrderReferenceCode</span><span className="token punctuation">&gt;</span></span>226<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>OrderReferenceCode</span><span className="token punctuation">&gt;</span></span>{"\n"}{"        "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>codes</span><span className="token punctuation">&gt;</span></span>{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>Orders</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>Orderdetail</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>AccessRequest</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>BenefitDocument</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"\n"}{"\n"}{"                                        "}</code></pre>

      </div>
      <h1 className="text-[2rem] my-6">API Call Result</h1>
      <h4 className="text-xl mb-2">Error In Detail</h4>
      <div className="overflow-x-auto">
<pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>status</span><span className="token punctuation">&gt;</span></span>0<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>status</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>message</span><span className="token punctuation">&gt;</span></span> You must enter CN number<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>message</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"                                        "}</code></pre>

      </div>
      <h4 className="text-xl mb-2">Success Result</h4>
      <div className="overflow-x-auto">
      <pre className=" language-markup"><code className=" language-markup"><span className="token prolog">&lt;?xml version="1.0" encoding="utf-8"?&gt;</span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>status</span><span className="token punctuation">&gt;</span></span>1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>status</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>OrderReferenceCode</span><span className="token punctuation">&gt;</span></span>222951<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>OrderReferenceCode</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"    "}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>status</span><span className="token punctuation">&gt;</span></span>Delivered<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>status</span><span className="token punctuation">&gt;</span></span>{"\n"}<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>result</span><span className="token punctuation">&gt;</span></span>{"\n"}{"\n"}{"                                        "}</code></pre>

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

export default Status;
