const StepByStep = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">
        Step by Step - Activation Process
      </h1>
      <ol className="text-[#575962] list-decimal">
        <li className="my-4">Login to your Webx admin panel.</li>
        <img
          src="/images/activation.jpg"
          alt="Webx Activation"
          loading="lazy"
        />
        <li className="my-4">
          From your Webx admin, go to Settings > Couriers – System Managed
        </li>
        <img
          src="/images/add-shipping.jpg"
          alt="Webx Activation"
          loading="lazy"
        />
        <li className="my-4">
          Click on Add Shipping/Courier Service; Manage Courier Service window
          will open.
        </li>

        <li className="my-4">
          Select BlueEX – COD from the list of Courier Services.
        </li>
        <img
          src="/images/manage-service.jpg"
          alt="Webx Activation"
          loading="lazy"
        />
        <li className="my-4">
          Enter the required information
          <ul className="list-disc">
            <li>Display name</li>
            <li>Test Mode (Yes, for testing. No for live)</li>
            <li>API Code (Provided by BlueEx)</li>
            <li>Username and Password (Provided by BlueEx)</li>
            <li>Origin City (The city you will send your shipment from)</li>
            <li>
              COD Charges (Avg. COD charges to be applied on each order,
              provided by BlueEx)
            </li>
          </ul>
        </li>
        <img
          src="/images/system-manage.jpg"
          alt="Webx Activation"
          loading="lazy"
        />
        <li className="my-4">Click Submit</li>
        <li className="my-4">
          You’re done! Your BlueEx account is now connected with Webx Ecommerce.
        </li>
      </ol>
    </div>
  );
};

export default StepByStep;
