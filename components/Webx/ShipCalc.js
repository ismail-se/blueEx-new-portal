const ShipCalc = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">Shipping Calculator</h1>
      <p className="mb-4 text-[#575962]">
        Now you have connected your BlueEx courier account with Webx Ecommerce.
        Next, you can set up your Shipping calculator, which enables auto
        calculation of shipping price at the time of checkout, based on the
        shipping locations and other different pricing factors.
      </p>
      <ul className="list-disc text-[#575962]">
        <li>Add and manage shipping zones</li>
        <li>Set shipping rates per item</li>
        <li>Set shipping rates with respect to total weight of order.</li>
        <li>Set shipping rates with respect to total amount of order.</li>
      </ul>
      <p className="mb-4 text-[#575962]">
        Shipping calculator applies shipping charges on orders other than COD
        charges.
      </p>
    </div>
  );
};

export default ShipCalc;
