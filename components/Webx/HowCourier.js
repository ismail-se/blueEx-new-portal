const HowCourier = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">
        How Courier Integration Works?
      </h1>
      <p className="mb-4 text-[#575962]">
        Webx Ecommerce connects with the courier service database using the
        programmable interfaces (APIs) provided by the courier service.
      </p>
      <ul className="list-disc text-[#575962]">
        <li>
          Webx Ecommerce sends account credentials and order details to the
          courier service through API
        </li>
        <li>
          Courier API authenticates the account credentials and books the order
          for COD shipping/delivery.
        </li>
        <li>
          API returns the Tracking number to Webx Ecommerce for tracking of the
          order shipment.
        </li>
      </ul>
    </div>
  );
};

export default HowCourier;
