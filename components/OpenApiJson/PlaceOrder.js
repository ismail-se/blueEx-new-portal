const PlaceOrder = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6">Place Order API</h1>
      <h4 className="text-xl mb-2">Credentials</h4>
      <div className="overflow-x-auto">
        <table className="w-full max-w-full">
          <tbody>
            <tr>
              <td className="border p-3">URL</td>
              <td className="border p-3">
                http://bigazure.com/api/demo/json/serverjson.php
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
        <pre style={{ color: "#000000", background: "#f1f0f0" }}>
          <span style={{ color: "#c34e00" }}>request={"{"}</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>{"\t"}"acno": "KHI-00000",</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"testbit": "y",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"userid": "demo",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"password": "demo123456",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"cn_generate": "y",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"customer_name": "Muhammad Talha",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"customer_email": "
          </span>
          <span style={{ color: "#7144c4" }}>symtalha@gmail.com</span>
          <span style={{ color: "#c34e00" }}>",</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"customer_contact": "03142050348",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"customer_address": "Flat #115 Block A Laraib
            Garden, Gulshan e Iqbal Block 1 Karachi",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"customer_city": "LHE",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"customer_country": "PK",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"customer_comment": "custmer comments",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"shipping_charges": "150",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"payment_type": "COD",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"shipper_origion_city": "KHI",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"total_order_amount": "2050",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;{"\t"}"order_refernce_code": "10005647",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"products_detail": [
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"    "}
            {"{"}
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"      "}"product_code": "1005",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"      "}"product_name": "Polo T shirt",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"      "}"product_price": "1000",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"      "}"product_weight": "0.5",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"      "}"product_quantity": "2",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"      "}"product_variations": "small-black",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"      "}"sku_code": "12assk11aa"
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            {"\t"}
            {"    "}
            {"}"}
          </span>
          {"\n"}
          {"\t"}
          <span style={{ color: "#806030" }}>]</span>
          {"\n"}
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
        </pre>
      </div>
      <h1 className="text-[2rem] my-6">API Call Result</h1>
      <h4 className="text-xl mb-2">Error In Detail</h4>
      <div className="overflow-x-auto">
        <pre style={{ color: "#000000", background: "#f1f0f0" }}>
          <span style={{ color: "#c34e00" }}>{"{"}</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>&nbsp;&nbsp;"status": "0",</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;"Error_message": "User id or password is invalid"
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>{"}"}</span>
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
        </pre>
      </div>
      <h4 className="text-xl mb-2">Success Result</h4>
      <div className="overflow-x-auto">
        <pre style={{ color: "#000000", background: "#f1f0f0" }}>
          <span style={{ color: "#c34e00" }}>{"{"}</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>&nbsp;&nbsp;"status": "1",</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>&nbsp;&nbsp;"success": "1",</span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;"order_code": "445",
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>
            &nbsp;&nbsp;"cn": "5006635355"
          </span>
          {"\n"}
          <span style={{ color: "#c34e00" }}>{"}"}</span>
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
        </pre>
      </div>
      <h1 className="text-[2rem] my-6">Parameters definition for Order API</h1>
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
              <td>Userid which BlueEX will provide you after demo </td>
            </tr>
            <tr>
              <td>password</td>
              <td>demo123456</td>
              <td>Userid which BlueEX will provide you after demo</td>
            </tr>
            <tr>
              <td>cn_generate</td>
              <td>y</td>
              <td>
                If you want directly CN after posting data to Bluekart use ‘y’.
                if you only want to send the data via api and want to create CN
                after blueKART CS confirmation process then use ‘n’.{" "}
              </td>
            </tr>
            <tr>
              <td>customer_name</td>
              <td>Asif Ali</td>
              <td>Customer Name in String format</td>
            </tr>
            <tr>
              <td>customer_email</td>
              <td>asif.ali@blue-ex.com</td>
              <td>Customer Email in String format</td>
            </tr>
            <tr>
              <td>customer_contact</td>
              <td>03145046741</td>
              <td>Customer Contact in String format</td>
            </tr>
            <tr>
              <td>customer_address</td>
              <td>H#123 PECHS Karachi</td>
              <td>Customer address in String format</td>
            </tr>
            <tr>
              <td>customer_city</td>
              <td>KHI</td>
              <td>
                Customer city in 2 digit Code Ie: KHI for Karachi ISB for
                Islamabad You can get all city code through BlueEX city Codes
                API
              </td>
            </tr>
            <tr>
              <td>customer_country</td>
              <td>PK</td>
              <td>Customer Country in 2 Digit Ie: PK</td>
            </tr>
            <tr>
              <td>customer_comment</td>
              <td>Comments from customer in order</td>
              <td>Customer Comments in String format</td>
            </tr>
            <tr>
              <td>shipping_charges</td>
              <td>150</td>
              <td>
                Shipping Charges if you want to charge the Customer otherwise
                use 0.
              </td>
            </tr>
            <tr>
              <td>payment_type</td>
              <td>COD</td>
              <td>
                Order Type. If order is related with cash collection use COD. If
                order is Credit card paid then use CC. In CC the amount will be
                display 0 in blueEX CN.{" "}
              </td>
            </tr>
            <tr>
              <td>shipper_origion_city</td>
              <td>KHI</td>
              <td>Shipper Origion City or Pickup City</td>
            </tr>
            <tr>
              <td>total_order_amount</td>
              <td>2500</td>
              <td>Complete order Amount</td>
            </tr>
            <tr>
              <td>order_refernce_code</td>
              <td>10000018</td>
              <td>Your order code should be here</td>
            </tr>
            <tr>
              <td>product_code</td>
              <td>1001</td>
              <td>Product code which ordered</td>
            </tr>
            <tr>
              <td>product_name</td>
              <td>T-Shirts</td>
              <td>Product name which ordered</td>
            </tr>
            <tr>
              <td>product_price</td>
              <td>500</td>
              <td>Product price </td>
            </tr>
            <tr>
              <td>product_quantity</td>
              <td>2</td>
              <td>Product qty which ordered</td>
            </tr>
            <tr>
              <td>product_variations</td>
              <td>small-red</td>
              <td>Product attributes colors, sizes etc</td>
            </tr>
            <tr>
              <td>sku_code</td>
              <td>100000ku2as100</td>
              <td>Sku code of item</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaceOrder;
