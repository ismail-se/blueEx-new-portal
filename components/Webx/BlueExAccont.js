const BlueExAccount = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">
        BlueEx Account & Activation
      </h1>
      <p className="mb-4 text-[#575962]">
        There is no programming/technical knowledge required to activate your
        BlueEx account with Webx Ecommerce. To connect BlueEx courier with your
        Webx Ecommerce website, you first need to have a valid and active BlueEx
        account. If you already have a BlueEx account, please contact BlueEx to
        get the required API credentials. If you do not have an active BlueEx
        account, you first need to create a new account with BlueEx, and then
        get the API credentials.
      </p>
      <p className="mb-4 text-[#575962]">
        After you get the API credentials of your BlueEx courier account, please
        follow the below mentioned steps to connect and activate your BlueEx
        account on Webx Ecommerce.
      </p>
      <ol className="text-[#575962] list-decimal">
        <li>Login to your Webx admin panel.</li>
        <li>
          From your Webx admin, go to Settings > Couriers – System Managed
        </li>
        <li>
          Click on Add Shipping/Courier Service; Manage Courier Service window
          will open.
        </li>
        <li>Select BlueEX – COD from the list of Courier Services.</li>
        <li>
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
        <li>Click Submit</li>
        <li>
          You’re done! Your BlueEx account is now connected with Webx Ecommerce.
        </li>
      </ol>
    </div>
  );
};

export default BlueExAccount;
