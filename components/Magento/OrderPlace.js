const OrderPlace = () => {
  return (
    <div>
      <h1 className="text-[2rem] my-6 text-[#575962]">
        How Courier Integration Works?
      </h1>
      <ol className="text-[#575962] list-decimal">
        <li className="my-4">Place test order in Magento</li>
        <img src="/images/02.jpg" alt="Webx Activation" loading="lazy" />
        <li className="my-4">Received Order at Bluekart</li>
        <img src="/images/02a.jpg" alt="Webx Activation" loading="lazy" />
        <img src="/images/02b.jpg" alt="Webx Activation" loading="lazy" />
        <img src="/images/02c.jpg" alt="Webx Activation" loading="lazy" />

        <li className="my-4">
          Update Customer information from Bluekart (Need credentials of your
          Staging Admin Panel website)
        </li>
        <img src="/images/03.jpg" alt="Webx Activation" loading="lazy" />

        <li className="my-4">
          Add, Edit, Delete products detail from Bluekart (Need credentials of
          your Staging Admin Panel website)
        </li>
        <img src="/images/04.jpg" alt="Webx Activation" loading="lazy" />
        <img src="/images/04a.jpg" alt="Webx Activation" loading="lazy" />

        <li className="my-4">
          Update Status from Bluekart (Need credentials of your Staging Admin
          Panel website)
        </li>
        <img src="/images/05.jpg" alt="Webx Activation" loading="lazy" />
        <li className="my-4">Create BlueEX CN and Tracking information</li>
        <img src="/images/06.jpg" alt="Webx Activation" loading="lazy" />
      </ol>
    </div>
  );
};

export default OrderPlace;
