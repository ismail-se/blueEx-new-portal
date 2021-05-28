const PlaceOrder = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Place Order Api</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/demo/xml/order/order_api.php
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
        <pre className="language-markup w-full max-w-full">
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
            1
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
                <span className="token punctuation">&lt;</span>Orderdetail
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>acno
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            KHI-00000
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>acno
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>testbit
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            y
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>testbit
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>userid
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            demo
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>userid
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>password
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            demo123456
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>password
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>cn_generate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            y
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>cn_generate
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>customer_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Muhammad Talha
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>customer_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>customer_email
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            symtalha@gmail.com
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>customer_email
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>customer_contact
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            03142050348
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>customer_contact
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>customer_address
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Flat 115 Block A Laraib Garden, Gulshan e Iqbal Block 1 Karachi
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>customer_address
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>customer_city
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            LHE
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>customer_city
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>customer_country
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            PK
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>customer_country
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>customer_comment
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            custmer comments
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>customer_comment
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"} {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>shipping_charges
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            150
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>shipping_charges
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>payment_type
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            COD
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>payment_type
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"} {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>all_products
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>products_detail
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            312
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"          "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Polo Shirt
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_price
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            900
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_price
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_quantity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_quantity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>
                product_variations
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Black-Medium
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>
                product_variations
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>sku_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            490uk192
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>sku_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>products_detail
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>products_detail
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            320
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Sleveless Tshirt
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_name
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_price
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            1200
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_price
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>product_quantity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            4
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>product_quantity
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>
                product_variations
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Red-Small
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>
                product_variations
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"      "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>sku_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            100uk192
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>sku_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"      "}
            {"\n"}
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>products_detail
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"    "}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>all_products
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>
                shipper_origion_city
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            KHI
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>
                shipper_origion_city
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>
                total_order_amount
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            KHI
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>
                total_order_amount
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>
                order_refernce_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            10000019
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>
                order_refernce_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>
                total_order_weight
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            3
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>
                total_order_weight
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}{" "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>Orderdetail
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
                <span className="token punctuation">&lt;</span>order_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            222951
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>order_code
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>cn
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            5011332492
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>cn
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
    </div>
  );
};

export default PlaceOrder;
